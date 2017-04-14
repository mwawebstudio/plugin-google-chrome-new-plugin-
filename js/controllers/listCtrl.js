angular.module('app').controller('listCtrl', function (listFactory, cardFactory, $scope, $rootScope) {
    var vm = this;
    vm.removeList = function (list) {
        listFactory.removeList(list);
        $scope.$broadcast('updateObj'); // event
        // Because this event is fired as an emit (goes up) on the $rootScope,
        // only the $rootScope will see it
        $rootScope.$emit('updateObj');	// event, rootScope прокидывает вверх по области видимости
    };
    vm.getCards = function (list) {
        return cardFactory.getCards(list);
    };
    vm.createCard = function (list) {
        cardFactory.createCard(list, vm.cardDescription);
        vm.cardDescription = '';
    };
});