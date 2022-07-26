var app = angular.module('OutboxApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
  	.when('/:id', {
      controller: 'EmailController',
      templateUrl: 'views/email.html'
    })
    .otherwise({
      redirectTo: '/outbox'
    });
});