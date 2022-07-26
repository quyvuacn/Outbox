var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/mail', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
  	.when('/mail/:id', {
      controller: 'EmailController',
      templateUrl: 'views/email.html'
    })
    .otherwise({
      redirectTo: '/mail'
    });
});