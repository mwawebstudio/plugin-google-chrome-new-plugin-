angular.module('app').directive('closeEditing', function () {
	var KEYS = {
		DELETE: 46
	
	};
	return {
		scope: {
			isEditing: '='
		},
		link: function (scope, element, attrs) {
			
			element.on('keyup', function (e) {
				if (_.isEqual(e.keyCode, KEYS.DELETE)) {
					scope.isEditing = false;
					scope.$apply(); //keyup - это метод jqLite и angular о нем ничего не знает. Поэтому нам нужно вызвать $scope.apply();
				}
			})
		}
	}
})