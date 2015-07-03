'use strict';

/**
 * @ngdoc overview
 * @name test2App
 * @description
 * # test2App
 *
 * Main module of the application.
 */
angular
  .module('test2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'xeditable',
    'dateFilters'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
  	localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/child/store', {
        templateUrl: 'app/views/child/store.html',
        controller: 'ChildStoreCtrl'

      })
      .when('/child/bank', {
        templateUrl: 'app/views/child/bank.html',
        controller: 'ChildBankCtrl',

      })
      .when('/child/work', {
        templateUrl: 'app/views/child/work.html',
        controller: 'ChildWorkCtrl',

      })
      .when('/parent/store', {
        templateUrl: 'app/views/parent/store.html',
        controller: 'ParentStoreCtrl',

      })
      .when('/parent/bank', {
        templateUrl: 'app/views/parent/bank.html',
        controller: 'ParentBankCtrl',

      })
      .when('/parent/work', {
        templateUrl: 'app/views/parent/work.html',
        controller: 'ParentWorkCtrl',

      })
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
