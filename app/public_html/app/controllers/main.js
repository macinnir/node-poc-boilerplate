'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'MainCtrl', function( $scope, localStorageService )
{
        var todosInStore = localStorageService.get( 'todos' );
        $scope.todos = todosInStore || [ ];
        // watch the $todos array for changes
        // Update the local store when the $todos array changes
        $scope.$watch( 'todos', function( )
        {
                localStorageService.set( 'todos', $scope.todos );
        }, true );
        $scope.addTodo = function( )
        {
                $scope.todos.push( $scope.todo );
                $scope.todo = '';
        };
        $scope.removeTodo = function( index )
        {
                $scope.todos.splice( index, 1 );
        };
} );
