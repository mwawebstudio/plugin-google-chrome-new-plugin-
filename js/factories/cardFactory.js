angular.module('app').factory('cardFactory', function (databaseFactory) {
	var service = {};
	var databasename = 'my_store_card';
	var cards = [	];



	service.getCards = function (list) {
		return _.filter(cards, { list_id: list.id });

	};

	service.createCard = function (list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
			
		});

		console.log("del me please");
		databaseFactory.setData({
			"path": databasename
			, value: cards

		});

	};

	service.deleteCard = function (card) {
		return _.pull(cards, card);
		console.log("del me please");
		databaseFactory.setData({
			"path": databasename
			, value: cards
		});
	};
	service.updateCard = function (updatingCard) {
		var card = _.find(cards, { id: updatingCard.id });
		console.log("del me please");
		databaseFactory.setData({
			"path": databasename
			, value: cards
		});
		card.description = updatingCard.description;
		card.list_id = updatingCard.list_id;
	};

	service.getCardsFromDB = function (card) {
		return databaseFactory.getData(databasename);
	}
	service.getCardsFromDB().then(function (data) {
		cards = data;
	});
	

	return service;
});