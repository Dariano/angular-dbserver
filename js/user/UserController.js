'use strict';
angular.module('controleUsuarios')
	.controller('UserController', function($scope, $http){
		$scope.users = {};

		$http.get('/users')
			.then(function  (users) {
				$scope.users = users.data;
			});
});