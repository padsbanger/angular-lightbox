var lightBox = angular.module('angular.lightbox', []);

lightBox.directive('lightbox', [function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {},
    link: function(scope, element) {

      var src = angular.element(element).attr('src'),
          template = document.createElement('div'),
          body = document.querySelectorAll('body')

      template.className = 'lightbox-overlay';


      angular.element(element).on('click', function() {
        if(src) {
         template.innerHTML =  '<img src="' + src + '" alt="" />';
         document.body.appendChild(template);
        }
      })

    }
  };

}]);
