'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ngAnimate',
    'ui.bootstrap'
]).
        config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCTRL'});
                $routeProvider.when('/sweepstakes', {templateUrl: 'partials/sweepstakes.html', controller: 'sweepstakesCTRL'});
                $routeProvider.otherwise({redirectTo: '/home'});
            }]);
