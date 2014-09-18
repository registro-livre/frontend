(function() {

  'use strict';

  angular.module('registroLivreApp.registro')
    .directive('endereco', function(){
      return {
        restrict: 'E',
        scope: {
          endereco: '=info'
        },
        templateUrl: 'views/endereco-template.html'
      };
    });

})();
