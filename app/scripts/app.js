'use strict';

angular.module('registroLivreApp.registro', []);

angular
  .module('registroLivreApp', [
    'registroLivreApp.registro',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/lista-registros.html',
        controller: 'ListaRegistrosCtrl'
      })
      .when('/novo', {
        templateUrl: 'views/novo-registro.html',
        controller: 'NovoRegistroCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
