(function(){
	'use strict';
	
	angular.module('MenuApp')
	.component('categories',{
		templateUrl:'template/categories.template.html',
		bindings:{
			categories:'<'
		}
	});
})();
