(function() {

  'use strict';

  var ToggleHasErrorClass = function(scope, el, attrs, formCtrl) {
    scope.$on('show-errors-after-validation', function() {
      var inputEl   = el[0].querySelector('[name]');
      var inputNgEl = angular.element(inputEl);
      var inputName = inputNgEl.attr('name');

      var shouldShowError = formCtrl[inputName].$invalid && formCtrl.submitted != undefined && formCtrl.submitted;

      el.toggleClass('has-error', shouldShowError);
    });
  };

  var ShowErrors = function() {
    return {
      restrict: 'A',
      require: '^form',
      link: ToggleHasErrorClass
    };
  };

  angular
    .module('registroLivreApp.registro')
    .directive('showErrors', ShowErrors);

})();
