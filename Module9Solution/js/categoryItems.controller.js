(function () {
	'use strict';
	
	angular.module('MenuApp')
	.controller('CategoryItemsController', CategoryItemsController);
	
	CategoryItemsController.$inject = ['items'];
	function CategoryItemsController(items) {
		var categoryList=this;
	  categoryList.allItems = items
	  categoryList.category = this.allItems.data.category['name']
	  categoryList.items = this.allItems.data.menu_items;
	  console.log(categoryList.items)
	}

})();