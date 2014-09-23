(function() {

  'use strict';

  function NovoRegistroCtrl ($scope, $timeout, novoRegistroModel) {

    $scope.model = novoRegistroModel;
    $scope.alerts = [];

    function anyFormIsInvalid() {
      return $scope.empresaForm.$invalid || $scope.arquivoForm.$invalid;
    }

    function errorAlert() {
      return { class: 'danger', message: 'Preencha todos os campos obrigatórios, que estão em vermelho' };
    }

    function addAlert(alert, timeout) {
      var removeAlert = function() {
        $scope.alerts.shift();
      };
      $scope.alerts.push(alert);
      $timeout(removeAlert, timeout);
    }

    function clearAlerts() {
      $scope.alerts = [];
    }

    function goToTop() {
      angular.element('#cnpj').focus();
    }

    function showErrorWhenSubmitting() {
      addAlert(errorAlert(), 5000);
      goToTop();
    }

    $scope.registrar = function() {
      clearAlerts();

      $scope.empresaForm.submitted = true;
      $scope.arquivoForm.submitted = true;

      $scope.$broadcast('show-errors-after-validation');

      if (anyFormIsInvalid()) {
        showErrorWhenSubmitting();
        return;
      }

      novoRegistroModel.registrar();
      goToTop();
      addAlert({ class: 'success', message: 'Obrigado por contribuir com o Registro Livre! Pronto para mais? ;-)'}, 3000);
    };

    $scope.adicionarSocio = function() {
      clearAlerts();

      $scope.socioForm.submitted = true;

      $scope.$broadcast('show-errors-after-validation');

      if ($scope.socioForm.$invalid) {
        return;
      }

      novoRegistroModel.adicionarSocio();

      $scope.socioForm.submitted = false;
    };

    $scope.showEstadoAtualError = function() {
      return $scope.socioForm.submitted !== undefined && $scope.socioForm.submitted && $scope.socioForm.estadoAtual.$invalid;
    };
  }

  angular.module('registroLivreApp.registro')
    .controller('NovoRegistroCtrl', ['$scope', '$timeout', 'novoRegistroModel', NovoRegistroCtrl]);

})();
