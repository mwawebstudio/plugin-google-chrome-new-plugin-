angular.module('app').controller('listsCtrl', ["listFactory", "$scope", "$rootScope", function (listFactory, $scope, $rootScope) {
    var vm = this;
    vm.lists = [];
    listFactory.getListsFromDB().then(function (r) {
        vm.lists = r; 
        $scope.$apply();
    });
    vm.addList = function () {
        listFactory.addList(this.listName);
        vm.listName = ''; // clear input, add ''
        $scope.$broadcast('updateObj');
        // Because this event is fired as an emit (goes up) on the $rootScope,
        // only the $rootScope will see it
        $rootScope.$emit('updateObj');
    };
    $rootScope.$on('updateObj', function (event, data) {
        console.log("data"); // Данные, которые нам прислали
        vm.lists = listFactory.getLists();
    });
}]);