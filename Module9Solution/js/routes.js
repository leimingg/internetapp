(function () {
	'use strict';
	
	angular.module('MenuApp')
	.config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	
	  // Redirect to home page if no other URL matches
	  $urlRouterProvider.otherwise('/');
	
	  // *** Set up UI states ***
	  $stateProvider
	
	  // Home page
	  .state('home', {
	    url: '/',
	    templateUrl: 'template/home.template.html'
	  })
	
	  // list categories 
	  .state('menuCategories', {
	    url: '/menu-categories',
	    templateUrl: 'template/list.allMenuCategories.template.html',
	    controller: 'MenuCategoriesController as menuCategories',
	    resolve: {
	      categories: ['MenuDataService',function (MenuDataService) {
	                    return MenuDataService.getAllCategories();

	                  }]
	    }
	  })
	
	  // List Items 
	  .state('categoryItems', {
	    url: '/category-item/{categoryShortName}',
	    templateUrl: 'template/list.allItems.template.html',
	    controller: 'CategoryItemsController as categoryItems',
	    resolve: {
	      items: ['$stateParams', 'MenuDataService',
	            function ($stateParams, MenuDataService) {
	              console.log("invoking getItemsForCategory()")
	              return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (items) {
	                  return items;
	                });
	            }]
	    }
	  });
	}

})();