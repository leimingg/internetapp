(function(){
	'use strict';
	
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',MsgController);
	
	MsgController.$inject=['$scope'];
	function MsgController($scope){
		$scope.message="";
		$scope.userInput="";
		
		$scope.checkDishes=function(){
			var dishArray=($scope.userInput).split(',')||[];
			dishArray=dishArray.filter(function(n){
				return n
			});
			if(dishArray.length==0){
				$scope.message="Please enter data first!";
				$scope.myStyle=getColorMsg("red")
			}else if(dishArray.length<=3&& dishArray.length>0){
				$scope.message="Enjoy!";
				$scope.myStyle=getColorMsg("green")
			}else if(dishArray.length>3){
				$scope.message="Too much!";
				$scope.myStyle=getColorMsg("green")
			}
		};
		function getColorMsg(color){
		var style={}
		style['border-color']=color
		style['border']="solid"
		style['color']=color
		return style
		}		
	}
	
})();
