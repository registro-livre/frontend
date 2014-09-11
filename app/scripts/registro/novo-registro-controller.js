(function() {
  'use strict';

  angular.module('registroLivreApp')
    .controller('NovoRegistroCtrl', ['$scope','novoRegistroModel', NovoRegistroCtrl]);

  function NovoRegistroCtrl ($scope, novoRegistroModel) {

    $scope.model = novoRegistroModel;

    $scope.registrar = function() {
      novoRegistroModel.registrar();
    };
  }
})();
