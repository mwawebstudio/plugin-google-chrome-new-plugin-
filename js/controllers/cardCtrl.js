angular.module('app').controller('cardCtrl', function (cardFactory) {
	var vm = this;
	vm.isEditing = false;
	vm.editingCard = null;
	
	vm.deleteCard = function (card) {
		cardFactory.deleteCard(card);
	};
	
	vm.editCard = function (card) {
		vm.isEditing = true;
		vm.editingCard = angular.copy(card);
	};
	
	vm.updateCard = function (card) {
		cardFactory.updateCard(vm.editingCard);
		vm.editingCard = null;
		vm.isEditing = false;
	};


});