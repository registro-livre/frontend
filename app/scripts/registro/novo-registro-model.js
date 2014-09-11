'use strict';

angular.module('registroLivreApp')
  .factory('novoRegistroModel', function () {

    var registro = {};

    return {
      registro: registro,
      registrar: registrar
    };

    function registrar() {
      console.log(registro);
    }
  });

