(function() {

  'use strict';

  function NovoRegistroCtrl ($scope, $timeout, novoRegistroModel) {

    $scope.model = novoRegistroModel;
    $scope.showSuccessMessage = false;

    $scope.registrar = function() {
      novoRegistroModel.registrar();
      angular.element('#cnpj').focus();
      $scope.showSuccessMessage = true;
      $timeout(function() { $scope.showSuccessMessage = false; }, 3000);
    };

    $scope.adicionarSocio = function() {
      novoRegistroModel.adicionarSocio();
    };
  }

  angular.module('registroLivreApp.registro')
    .controller('NovoRegistroCtrl', ['$scope', '$timeout', 'novoRegistroModel', NovoRegistroCtrl]);

})();
