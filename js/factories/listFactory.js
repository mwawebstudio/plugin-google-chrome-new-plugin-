  angular.module('app').factory('listFactory', function (databaseFactory) {
    var service = {};
    var databasename = 'data_base_list';
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


      var cards = databaseFactory.getData("data_base_card");
      

      var evens = _.remove(cards, function(c) {

        return c.list_id == list.id;;
      });
      
      console.log(evens);
      databaseFactory.setData({
        "path": "data_base_card"
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