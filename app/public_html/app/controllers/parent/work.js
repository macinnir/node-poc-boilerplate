'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'ParentWorkCtrl', function( $rootScope, $routeParams, $scope, choresService, transactionsService )
{

        choresService.getChores( )
        	.success(function(chores) {
        		$scope.chores = chores;
        	});
        $scope.chore = angular.copy( $scope.chore );
        $scope.addChore = function( )
        {
                choresService.addChore( $scope.chore );
        };
        $scope.removeChore = function( idx )
        {
                choresService.removeChore( idx );
        };
        $scope.updateChore = function( index, chore )
        {
                choresService.updateChore( index, chore );
        };
        $scope.finishChore = function( idx )
        {
                alert( 'finishing chore!' );
                choresService.finishChore( idx );
        };
        $scope.approveChore = function( idx )
        {
                alert( 'approving chore!' );
                if ( $scope.chores[ idx ].priceMoney > 0 )
                {
                        transactionsService.addMoney( $scope.chores[ idx ].priceMoney, 'Chore `' + $scope.chores[ idx ].name + '`' );
                }
                if ( $scope.chores[ idx ].pricePoints > 0 )
                {
                        transactionsService.addPoints( $scope.chores[ idx ].pricePoints, 'Chore `' + $scope.chores[ idx ].name + '`' );
                }
                choresService.approveChore( idx );
        };
        $scope.duplicateChore = function( idx )
        {
                choresService.duplicateChore( idx );
        };
        // $scope.addMoneyTransaction = function( )
        // {
        //         console.log( 'adding money transaction' );
        //         transactionsService.addMoneyTransaction( $scope.moneyTransaction );
        //         $scope.moneyTransactions = transactionsService.getMoneyTransactions( );
        //         $scope.balances = transactionServices.getBalances( );
        // };
        // $scope.addPointsTransaction = function( )
        // {
        //         console.log( 'adding points transaction' );
        //         transactionsService.addPointsTransaction( $scope.pointsTransaction );
        //         $scope.pointsTransactions = transactionsService.getPointsTransactions( );
        //         $scope.balances = transactionServices.getBalances( );
        // };
} );
