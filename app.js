var myApp = angular.module('myApp', ['ngRoute']);

//possible because of ngRoute
myApp.config(function($routeProvider){

	//what we should do if we see something in the hash
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

});

//singleton object that will contain properties, functions, or methods
myApp.service('nameService', function(){

	var self = this;
	this.name = "John Doe";
	this.nameLength = function(){
		return self.name.length;

	};

});

myApp.controller('mainController', ['$scope','$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = "main";

	$scope.people = [
	{
	  	name: 'John Doe',
	  	address: '123 Main Street',
	  	city: 'San Diego',
	  	state: 'CA',
	  	zip: '12345'
	},
	{
	  	name: 'Jane Doe',
	  	address: '123 Broadway Street',
	  	city: 'Los Angeles',
	  	state: 'CA',
	  	zip: '12348'
	},
	{
	  	name: 'David Doe',
	  	address: '123 Market Street',
	  	city: 'San Francisco',
	  	state: 'CA',
	  	zip: '222222'
	},
	];

	$scope.formattedAddress = function(person){
		return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
	}
	

    
}]);

myApp.controller('secondController', ['$scope', '$log','$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
  

    
}]);

myApp.directive("searchResult", function(){


	//this object is the directive
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchresult.html',
		replace: true,
		scope: {
			personObject: "=", //this means we should expect an object, 2-way binding
			formattedAddressFunction: "&"//it tells it we are passing a function
		},
		compile: function(elem, attrs){

			console.log('Compiling...');
			console.log(elem.html());

			return {

				pre: function(scope, elements, attrs){
					console.log('Pre-linking...');
					console.log(elements);

				},
				post: function(scope, elements, attrs){
					console.log('Post-linking...');
					console.log(elements);

				}
			}
		}
	}

});
