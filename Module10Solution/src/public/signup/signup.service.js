(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = [];
function SignUpService() {
  var service = this;
  var user = {};

  service.saveUser = function (firstName, lastName, email, phone) {
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.phone = phone;
  };

  service.getUser = function () {
    return user;
  };

  service.setFavoriteItem = function (item) {
    user.favorite = item;
  }
}
})();