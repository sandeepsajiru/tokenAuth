'use strict';

describe('Directive: matchPassword', function () {

  // load the directive's module
  beforeEach(module('tokenAuthApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<match-password></match-password>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the matchPassword directive');
  }));
});
