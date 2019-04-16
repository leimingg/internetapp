(function () {
  'use strict';

  var app=angular.module('NarrowItDownApp', []);
  app.controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItems() {
    var ddo = {
    	templateUrl: 'loader/itemsfound.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
    };
    return ddo;
  }

	NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menuController = this;

    menuController.searchTerm = '';
    menuController.foundItems = [];    

    // find items which include user's input
    menuController.narrowItDown = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menuController.searchTerm);

      promise.then(function (result) {
        menuController.foundItems = result;
      }).catch(function (error) {
        console.log(error);
      });
    };


		menuController.removeItem = MenuSearchService.removeItem;
    
  }
  
  MenuSearchService.$inject = ['$http', '$filter', 'ApiBasePath'];
  function MenuSearchService($http, $filter, ApiBasePath) {
    var serviceController = this;

    serviceController.foundItems = [];

    serviceController.getMatchedMenuItems = function (searchTerm) {
      return $http({method: "GET", url: ApiBasePath + '/menu_items.json'}).then(function(result) {
        serviceController.foundItems = $filter('filter')(result.data.menu_items, searchTerm);
        return serviceController.foundItems;
      });
    };
		
    // delete item from list
    serviceController.removeItem = function (itemIndex) {
      serviceController.foundItems.splice(itemIndex, 1);
    };
  }


})();
