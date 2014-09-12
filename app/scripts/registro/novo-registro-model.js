(function () {
  'use strict';

  angular.module('registroLivreApp')
  .factory('novoRegistroModel', function () {

    var registro = {};

    function registrar() {
      console.log(registro);
    }

    return {
      registro: registro,
      registrar: registrar
    };
  });
})();
