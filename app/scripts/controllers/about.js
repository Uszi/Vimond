'use strict';

/**
 * @ngdoc function
 * @name vimondApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vimondApp
 */
angular.module('vimondApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
