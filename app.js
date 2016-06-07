"use strict";
var app = angular.module('controleUsuarios', ['minhasDiretivas', 'ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/usuarios', {
		templateUrl: 'partials/principal.html',
		controller: 'UserController'	
	});

	$routeProvider.when('/usuario/create', {
		templateUrl: 'partials/usuario/usuario.html',
		controller: 'CreateUserController',
		controllerAs: 'userCtrl'
	});

	$routeProvider.otherwise({ redirectTo: '/usuarios'});
});