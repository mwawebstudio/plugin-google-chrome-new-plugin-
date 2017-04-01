angular.module('app').factory('cardFactory', function () {
	var service = {};
	var cards = [
	{

	  id: 1,
	  description: 'Пароль от сайта vk.com',
	  list_id: 1
	},

	{
	  id: 2,
	  description: 'Description cardFactory_2',
	  list_id: 2
	},
	{

	  id: 3,
	  description: 'Description cardFactory_2',
	  list_id: 3
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
	return service;
});