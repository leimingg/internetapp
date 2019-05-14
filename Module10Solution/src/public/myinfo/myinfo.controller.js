(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'ApiPath'];
function MyInfoController(SignUpService, ApiPath) {
var $ctrl = this;
$ctrl.basePath = ApiPath;
	var user = SignUpService.getUser();

$ctrl.userNotExit = function() {
	return !$ctrl.hasUser();
}
$ctrl.hasUser = function() {
	return user.firstName != null	
}

if( $ctrl.hasUser() ) {
	  $ctrl.firstName = user.firstName;
	  $ctrl.lastName = user.lastName;
	  $ctrl.phone = user.phone;
	  $ctrl.email = user.email;
	  
	  if( user.favorite != null )
	  	$ctrl.favorite = user.favorite;
	}
}

})();
