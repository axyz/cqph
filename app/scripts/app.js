'use strict';

angular
  .module('cqphApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'snap',
    'pasvaz.bindonce'
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
