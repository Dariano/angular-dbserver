'use strict';
app.controller('CreateUserController', function(){
	var vm = this;

	vm.user = {};

	vm.salvar = function (user) {
		console.info(user);
	};

});