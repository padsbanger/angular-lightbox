var lightBox = angular.module('angular.lightbox', []);

lightBox.directive('lightBox', [function() {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    template: '',
    scope: {},
    link: function(scope, element) {}
  };

}]);
