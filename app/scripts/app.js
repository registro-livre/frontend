'use strict';

/**
 * @ngdoc overview
 * @name registroLivreApp
 * @description
 * # registroLivreApp
 *
 * Main module of the application.
 */
angular
  .module('registroLivreApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
