(function() {

  'use strict';

  angular.module('registroLivreApp')
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
