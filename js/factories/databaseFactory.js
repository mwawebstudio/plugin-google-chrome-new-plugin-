 angular.module('app').factory('databaseFactory', ["$q", function ($q) {
     var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
         , IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction
         , baseName = "filesBase"
         , storeName = "filesStore"
         , data = [];

     function logerr(err) {
         console.log(err);
     }

// Подключение к базе данных

     function connectDB(f) {
         var request = indexedDB.open(baseName, 1);
         request.onerror = logerr;
         request.onsuccess = function () {
             f(request.result);
         }
         request.onupgradeneeded = function (e) {
             e.currentTarget.result.createObjectStore('my_store', {
                 keyPath: 'key'
                 , autoIncrement: true
             });
             connectDB(f);
         }
     }

     function getData(key) {
         var deferred = $q.defer();
         connectDB(function (db) {
             var objectStore = db.transaction([storeName], "readonly").objectStore(storeName);
             // get record by key from the object store
             var objectStoreRequest = objectStore.get(key);
             //console.log(objectStoreRequest.result);
             objectStoreRequest.onsuccess = function () {
                 // Grab the data object returned as the result
                 data = objectStoreRequest.result;
                 deferred.resolve(data.value);
                 console.log("we are here");
             }
         });
         return deferred.promise;
     }

     function setData(data) {
         connectDB(function (db) {
             var request = db.transaction([storeName], "readwrite").objectStore(storeName).put(data);
             //request.onerror = logerr;
             request.onsuccess = function () {
                 return request.result;
             }
         });
     }

     function delStorage(file) {
         connectDB(function (db) {
             var request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(file);
             // request.onerror = logerr;
             request.onsuccess = function () {
                 console.log("File delete from DB:", file);
             }
         });
     }
     return {
         data: data
         , connectDB: connectDB
         , getData: getData
         , setData: setData
         , delStorage: delStorage
     };
 }]);