'use strict';

/**
 * @ngdoc function
 * @name test2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test2App
 */
angular.module('test2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
