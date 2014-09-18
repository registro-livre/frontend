(function () {
  'use strict';

  angular.module('registroLivreApp')
    .factory('novoRegistroModel', function () {

    var registro = {};
    var novoSocio = {};

    var listaDeRegistros = [];

    function registrar() {
      /*jshint validthis:true */
      listaDeRegistros.push(angular.copy(this.registro));
      /*jshint validthis:true */
      this.registro = {};

      console.log(listaDeRegistros);
    }

    function adicionarSocio() {
      /*jshint validthis:true */
      if (this.registro.socios === undefined) {
        /*jshint validthis:true */
        this.registro.socios = [];
      }

      /*jshint validthis:true */
      this.registro.socios.push(angular.copy(this.novoSocio));

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
