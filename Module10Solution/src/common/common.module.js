(function() {
"use strict";

angular.module('common', [])
//domain has been setup: my name followed by restaurant
.constant('ApiPath', 'https://leiming-restaurant.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
