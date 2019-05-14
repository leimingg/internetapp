(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var serviceMenu = this;

  serviceMenu.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  serviceMenu.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
	
	 serviceMenu.getMenuItem = function(shortName) {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + shortName + ".json")
    });
    return response;
  };
}



})();
