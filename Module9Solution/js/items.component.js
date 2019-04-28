(function () {
	'use strict';
	
	angular.module('MenuApp')
	.component('items', {
	  templateUrl: 'template/items.detail.template.html',
	  bindings: {
	    items: '<'
	  }

});

})();