	// create the module and name it app
	var app = angular.module('app', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page   
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
            })

			// route for the contact page   
			.when('/register', {
				templateUrl : 'views/registration.html',
				controller  : 'mainController'
            })
            .otherwise({
				templateUrl : 'views/home.html',
				controller  : 'mainController'
            });
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});