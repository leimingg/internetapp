(function () {
	'use strict';
	
	angular.module('Data')
	.service('MenuDataService', MenuDataService)
	.constant('MenuURL', "https://davids-restaurant.herokuapp.com");
	
	MenuDataService.$inject = ['$q', '$http', 'MenuURL']
	
	function MenuDataService($q, $http, MenuURL) {
		var service=this;
		
	  service.getAllCategories = function() {
	    console.log("getAllCategories")
	    var response = $http({
	      method: "GET",
	      url: (MenuURL+"/categories.json")
	    });
	    return response;
	  };
	
	  service.getItemsForCategory = function(categoryShortName) {
	    console.log("getItemsForCategory")
	    var response = $http({
	      method: "GET",
				url:(MenuURL+"/menu_items.json?category="),
	      params: {
	        category: categoryShortName
	      }
	    });
	
	    return response;
	  };
	
	}

})();