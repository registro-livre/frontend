(function () {
  'use strict';

  angular.module('registroLivreApp')
    .factory('novoRegistroModel', function () {

    var registro = {};
    var novoSocio = {};

    function registrar() {
      console.log(registro);
    }

    function adicionarSocio() {
      if (registro.socios === undefined) {
        registro.socios = [];
      }

      /*jshint validthis:true */
      registro.socios.push(angular.copy(this.novoSocio));

      /*jshint validthis:true */
      this.novoSocio = {};
    }

    return {
      registro: registro,
      registrar: registrar,
      novoSocio: novoSocio,
      adicionarSocio: adicionarSocio
    };
  });

})();
