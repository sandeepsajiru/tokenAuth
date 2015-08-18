'use strict';

/**
 * @ngdoc directive
 * @name tokenAuthApp.directive:matchPassword
 * @description
 * # matchPassword
 */
angular.module('tokenAuthApp')
  .directive('matchPassword', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the matchPassword directive');
      }
    };
  });
