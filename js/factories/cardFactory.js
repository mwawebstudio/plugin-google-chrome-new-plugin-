angular.module('app').factory('cardFactory', function () {
	var service = {};
	var cards = [
	{

		id: 1,
		description: 'Задачи на завтра',
		list_id: 1
	},

	{
		id: 2,
		description: 'Задачи на сегодня',
		list_id: 2
	}

	];



	service.getCards = function (list) {
		return _.filter(cards, { list_id: list.id });
	};

	service.createCard = function (list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id

		});

	};

	service.deleteCard = function (card) {
		return _.pull(cards, card);
	};
	service.updateCard = function (updatingCard) {
		var card = _.find(cards, { id: updatingCard.id })
		card.description = updatingCard.description;
	};

	return service;
});