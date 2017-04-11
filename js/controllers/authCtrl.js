angular.module('app').controller('authCtrl', ["$http",function ($http) {


	this.authorization = function(){

		var _login = $scope.login;
		var _password = $scope.password;
		$http({
			method: 'POST'
			, url: '/login'
			, data: {
				login: _login
				, password: _password
			}
		}).then(function successCallback(response) {}
		);
	}
}])
