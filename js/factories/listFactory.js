 angular.module('app').factory('listFactory', function () {
var service = {};

var lists = [ 
{
id: 1,
listName: 'Todo'
},
{
id: 2,
listName: 'Diung'
},
{
id: 3,
listName: 'trelo'
}
];

service.getLists = function () {
return lists;
};

service.addList = function (listName) {
 	lists.push({
	id: _.uniqueId('list_'),	
	listName: ListName
 	});
 };
return service;
});

