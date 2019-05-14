(function () {
	"use strict";
	
	angular.module('public')
	.controller('SignUpController', SignUpController);
	
	SignUpController.$inject = ['SignUpService', 'MenuService'];
	function SignUpController(SignUpService, MenuService) {
	  var $ctrl = this;
	  $ctrl.itemExit = true;
	
	  $ctrl.signUp = function() {
	  	SignUpService.saveUser($ctrl.firstName, $ctrl.lastName, $ctrl.email, $ctrl.phone);
	  	MenuService.getMenuItem($ctrl.favorite)
	  		.then(function(result) {
	  			SignUpService.setFavoriteItem(result.data);
	  		})
	  		.catch(function(error) {
	  			console.log("error");
	  		});
	  }
	
	  $ctrl.checkUser = function() {
	  	var user = SignUpService.getUser();
	  	return user.firstName
	  		|| user.lastName
	  		|| user.email
	  		|| user.phone;
	  }
		
	$ctrl.checkItem = function() {
	  	return !$ctrl.itemExit;
	  }
		
	  $ctrl.validateItemExist = function() {
	  	MenuService.getMenuItem($ctrl.favorite)
	  		.then(function(result) {
	  			$ctrl.itemExit = true;
	  		})
	  		.catch(function(error) {
	  			$ctrl.itemExit = false;
	  		});
	  }  
	}

})();
 