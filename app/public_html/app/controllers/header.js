'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'HeaderCtrl', function( $scope, $location, userService, localStorageService )
{
        $scope.roles = [ 'parent', 'child' ];
        var user = userService.getUser();
        $scope.user = userService.getUser();
        $scope.role = $scope.user && angular.isDefined($scope.user.role) ? $scope.user.role : 'parent';
        $scope.menuItems = {
                'child': [
                {
                        path: '/child/store',
                        mask: 'Buy'
                },
                {
                        path: '/child/bank',
                        mask: 'Save'
                },
                {
                        path: '/child/work',
                        mask: 'Earn'
                } ],
                'parent': [
                {
                        path: '/parent/store',
                        mask: 'Store'
                },
                {
                        path: '/parent/bank',
                        mask: 'Bank'
                },
                {
                        path: '/parent/work',
                        mask: 'Work'
                } ]
        };
        $scope.setRole = function( roleName )
        {
                if ( $scope.roles.indexOf( roleName ) === -1 )
                {
                        roleName = $scope.roles[ 0 ];
                }
                $scope.role = roleName;
                localStorageService.set( 'role', roleName );
                $scope.setRoleMenuItems( );
                $location.path('/' + roleName + '/store');
        };
        $scope.setRoleMenuItems = function( )
        {
                $scope.activeMenuItems = $scope.menuItems[ $scope.role ];
        };
        $scope.setRoleMenuItems( );
        $scope.isActive = function( viewLocation )
        {
                //console.log(viewLocation, $location.path());
                return viewLocation === $location.path( );
        };
} );
