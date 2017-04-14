  angular.module('app').factory('listFactory', function (databaseFactory) {
      var service = {};
      var lists = [
];
      service.getLists = function () {
          return lists;
      };
      service.addList = function (listName) {
          lists.push({
              id: _.uniqueId('list_')
              , listName: listName
          });
          databaseFactory.setData({
              "path": 'data_base_key4'
              , value: lists
          });
      };
      service.removeList = function (list) {
          _.pull(lists, list);
          console.log("del me please");
          databaseFactory.setData({
              "path": 'data_base_key4'
              , value: lists
          });
      }
      service.getListsFromDB = function () {
          return databaseFactory.getData('data_base_key4');
      }
      service.getListsFromDB().then(function (data) {
          lists = data;
      })
      return service;
  });