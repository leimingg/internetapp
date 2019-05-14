describe('The menu service', function() {
  'use strict';

  var $httpBackend;
  var menuService;
  var ApiPath;

  // Sample data to mock http requests
  var testData = {
    allMenuItems: [

			{"id":1,
			"short_name":"A1",
			"name":"Won Ton Soup with Chicken",
			"description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
			"price_small":2.55,
			"price_large":5.0,
			"small_portion_name":"pint",
			"large_portion_name":"quart",
			"created_at":"2019-05-13T04:21:28.819Z",
			"updated_at":"2019-05-13T04:21:28.819Z",
			"category_short_name":"A",
			"image_present":true
			},
			{"id":208,
			"short_name":"L16",
			"name":"Beef String Bean",
			"description":"sliced beef sauteed with string beans and onions",
			"price_small":null,
			"price_large":9.75,
			"small_portion_name":null,
			"large_portion_name":null,
			"created_at":"2019-05-13T04:24:44.725Z",
			"updated_at":"2019-05-13T04:24:44.725Z",
			"category_short_name":"L",
			"image_present":true}

    ]

  };

 
  beforeEach(function() {
    module('common');

    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return menu items if no category code is specified', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(testData.allMenuItems);
    menuService.getMenuItems(null).then(function(items) {
      expect(items).toEqual(testData.allMenuItems);
    });
    $httpBackend.flush();
  });

});