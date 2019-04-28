(function () {
	'use strict';
	
	angular.module('MenuApp')
	.controller('MenuCategoriesController', MenuCategoriesController);
	
	MenuCategoriesController.$inject = ['categories'];
	function MenuCategoriesController(categories) {
	  this.categories = categories.data;
	  console.log(this.categories)
	}

})();