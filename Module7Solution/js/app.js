(function () {
  'use strict';

  var app=angular.module('ShoppingListCheckOff', [])
  
  app.controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckoffService', ShoppingListCheckoffService)
  .filter('ItemPrice', ItemPriceFilterFactory)
	
	function ItemPriceFilterFactory() {
		return function (input,prefix) {
      var subtotalPrice = input.pricePerItem*input.quantity
      return prefix+parseFloat(subtotalPrice).toFixed(2);
    };
  }
	
	function ShoppingListCheckoffService() {
  	//initial shopping list
    var toBuyItems = [
      {
        name: "Yoghourt",
        quantity: "10",
        pricePerItem: 1.5
      },
      {
        name: "Chessecake",
        quantity: "2",
        pricePerItem: 3.0
      },
      {
        name: "Sandwich",
        quantity: "10",
        pricePerItem: 3.5
      },
      {
        name: "Apple",
        quantity: "20",
        pricePerItem: 1.0
      },
      {
        name: "Orange",
        quantity: "30",
        pricePerItem: 1.0
      }
    ];
    //get items to buy
    this.getToBuyItems = function () {
      return toBuyItems;
    }

    var alreadyBoughtItems = []
		//get items already bought
    this.getBoughtItems = function () {
      return alreadyBoughtItems;
    }

    this.buyAnItem = function(toBuyItemIndex) {
      alreadyBoughtItems.push(toBuyItems[toBuyItemIndex])
      toBuyItems.splice(toBuyItemIndex, 1)
    }
  }

  ToBuyController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function ToBuyController($scope, ShoppingListCheckoffService) {
 
    this.toBuyItems = ShoppingListCheckoffService.getToBuyItems();
    this.buyAnItem = function(index) {
      ShoppingListCheckoffService.buyAnItem(index)
    }
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckoffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckoffService) {
    
    this.boughtItems = ShoppingListCheckoffService.getBoughtItems();
  }

})();