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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/child/store', {
        templateUrl: 'views/child/store.html',
        controller: 'ChildStoreCtrl'

      })
      .when('/child/bank', {
        templateUrl: 'views/child/bank.html',
        controller: 'ChildBankCtrl',

      })
      .when('/child/work', {
        templateUrl: 'views/child/work.html',
        controller: 'ChildWorkCtrl',

      })
      .when('/parent/store', {
        templateUrl: 'views/parent/store.html',
        controller: 'ParentStoreCtrl',

      })
      .when('/parent/bank', {
        templateUrl: 'views/parent/bank.html',
        controller: 'ParentBankCtrl',

      })
      .when('/parent/work', {
        templateUrl: 'views/parent/work.html',
        controller: 'ParentWorkCtrl',

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
