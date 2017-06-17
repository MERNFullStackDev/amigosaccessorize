(function(){
	var app = angular.module("amigosApp",["ngRoute"]);

	app.config(function($routeProvider) {
		    $routeProvider
		    .when("/", {
		        templateUrl : "view/home.html"
		    })
		    .when("/red", {
		        templateUrl : "view/red.html"
		    })
		    .when("/green", {
		        templateUrl : "view/green.html"
		    })
		    .when("/blue", {
		        templateUrl : "view/blue.html"
		    });
	});


	/****** To run custom jquery Script **/
	function initCustomScript(){
		Page().init(); // Home page box slicing
		initMain(); // Sliders on home page
	}
	setTimeout(initCustomScript,5000);	

}());