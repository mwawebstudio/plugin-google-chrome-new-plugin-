angular.module('app').factory('cardFactory', function (databaseFactory) {
	var service = {};
	var databasename = 'data_base_card';
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