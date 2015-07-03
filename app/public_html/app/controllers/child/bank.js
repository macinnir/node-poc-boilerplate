'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'ChildBankCtrl', function( $filter, $routeParams, $scope, localStorageService, transactionsService )
{
        $scope.title = 'My Bank';
        $scope.moneyTransactions = transactionsService.getMoneyTransactions( );
        $scope.pointsTransactions = transactionsService.getPointsTransactions( );
        $scope.balances = transactionsService.getBalances( );
} );
