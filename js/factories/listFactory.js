  angular.module('app').factory('listFactory', function (databaseFactory) {
    var service = {};
    var databasename = 'my_store_lists';
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
        "path": databasename
        , value: lists
      });
    };
    service.removeList = function (list) {
      _.pull(lists, list);
      console.log("del me please");
      databaseFactory.setData({
        "path": databasename
        , value: lists
      });


      var cards = databaseFactory.getData("my_store_card");
      

      var evens = _.remove(cards, function(c) {

        return c.list_id == list.id;;
      });
      
      console.log(evens);
      databaseFactory.setData({
        "path": "my_store_card"
        , value: evens

      });
      
    }
    service.getListsFromDB = function () {
      return databaseFactory.getData(databasename);
    }
    service.getListsFromDB().then(function (data) {
      lists = data;
    })
    return service;
  });