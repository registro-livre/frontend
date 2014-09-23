(function() {

  'use strict';

  function NovoRegistroCtrl ($scope, $timeout, novoRegistroModel) {

    $scope.model = novoRegistroModel;
    $scope.showSuccessMessage = false;

    function anyFormIsInvalid() {
      return $scope.empresaForm.$invalid || $scope.arquivoForm.$invalid;
    }

    $scope.registrar = function() {
      $scope.empresaForm.submitted = true;
      $scope.arquivoForm.submitted = true;

      $scope.$broadcast('show-errors-after-validation');

      if (anyFormIsInvalid()) {
        return;
      }

      novoRegistroModel.registrar();
      angular.element('#cnpj').focus();
      $scope.showSuccessMessage = true;
      $timeout(function() { $scope.showSuccessMessage = false; }, 3000);
    };

    $scope.adicionarSocio = function() {
      $scope.socioForm.submitted = true;

      $scope.$broadcast('show-errors-after-validation');

      if ($scope.socioForm.$invalid) {
        return;
      }

      novoRegistroModel.adicionarSocio();

      $scope.socioForm.submitted = false;
    };
  }

  angular.module('registroLivreApp.registro')
    .controller('NovoRegistroCtrl', ['$scope', '$timeout', 'novoRegistroModel', NovoRegistroCtrl]);

})();
