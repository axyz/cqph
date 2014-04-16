'use strict';

angular
  .module('cqphApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'snap',
    'btford.socket-io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/topic/:topic', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
