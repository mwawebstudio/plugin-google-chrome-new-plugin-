angular.module('app').controller('listsCtrl', function (listFactory) {
  console.log('listsCtrl');
  this.lists = listFactory.getLists();

  this.addList = function () {
  	console.log('ListName');
      listFactory.addList(this.listName);
      this.listName = ' ';
  };
});