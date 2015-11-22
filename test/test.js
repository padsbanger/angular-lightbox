'use strict';

describe('lightbox directive', function () {
  var scope, element;

  beforeEach(module('angular.lightbox'));

  beforeEach(inject(function ($rootScope, $compile) {

    scope = $rootScope.$new();

    // element = $compile('')(scope);

    scope.$digest();
  }));

  it('', function() {

  });

});
