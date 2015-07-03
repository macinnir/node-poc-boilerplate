'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'ChildWorkCtrl', function( $routeParams, $scope, choresService)
{
        $scope.title = "Let's doing some earning!";
        choresService.getChores()
        	.success(function(chores) {
        		$scope.chores = chores;
        	});

        $scope.updateChore = function( idx, chore )
        {
                $scope.chores[ idx ] = chore;
        };

        $scope.finishChore = function(idx) {
        	alert('finishing chore!');
        	choresService.finishChore(idx);
        };

} );
