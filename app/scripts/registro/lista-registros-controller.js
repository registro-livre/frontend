(function() {

  'use strict';

  function ListaRegistrosCtrl($scope, novoRegistroModel) {
    $scope.model = novoRegistroModel;
  }

  angular.module('registroLivreApp.registro')
    .controller('ListaRegistrosCtrl', ['$scope', 'novoRegistroModel', ListaRegistrosCtrl]);

})();
