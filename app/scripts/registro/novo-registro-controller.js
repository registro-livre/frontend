(function() {

  'use strict';

  function NovoRegistroCtrl ($scope, novoRegistroModel) {

    $scope.model = novoRegistroModel;

    $scope.registrar = function() {
      novoRegistroModel.registrar();
	  angular.element('#cnpj').focus();
    };

    $scope.adicionarSocio = function() {
      novoRegistroModel.adicionarSocio();
    };
  }

  angular.module('registroLivreApp')
    .controller('NovoRegistroCtrl', ['$scope','novoRegistroModel', NovoRegistroCtrl]);

})();
