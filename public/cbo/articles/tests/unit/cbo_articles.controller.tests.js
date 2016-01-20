// Invoke 'strict' JavaScript mode
//'use strict';

// Create the 'articles' module unit test suite
describe('Testing Articles Controller', function() {
  // Define global variables
  var _scope, cboArticlesController;

  // Define a pre-tests function
  beforeEach(function() {
    // Load the 'bj101' module
    module('bj101');

    // Add a new Jasmine matcher
    jasmine.addMatchers({
      toEqualData: function(util, customEqualityTesters) {
        return {
          compare: function(actual, expected) {
            return {
              pass: angular.equals(actual, expected)
            };
          }
        };
      }
    });

    // Use the 'inject' method to inject services
    inject(function($rootScope, $controller) {
      // Create a mock scope object
      _scope = $rootScope.$new();

      // Create a new mock controller
      cboArticlesController = $controller('cboArticlesController', {
        $scope: _scope
      });
    });
  });

	// Test the 'find' method
	it('Should have a find method that uses $resource to retrieve a list of articles', inject(function(cboArticles) {
		// Use the 'inject' method to inject services
		inject(function($httpBackend) {
			// Create a sample article
			var sampleArticle = new cboArticles({
				title: 'An Article about MEAN',
				content: 'MEAN rocks!'
			});

			// Create a sample articles list
			var sampleArticles = [sampleArticle];

			// Define a request assertion
			$httpBackend.expectGET('api/bo/articles').respond(sampleArticles);

			// Call the controller's 'find' method
			_scope.find();

			// Flush the mock HTTP results
			$httpBackend.flush();

			// Test the results
			expect(_scope.articles).toEqualData(sampleArticles);
		});
	}));

});

