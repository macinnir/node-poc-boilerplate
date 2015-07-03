'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'ParentStoreCtrl', function( $routeParams, $filter, $scope, localStorageService, productsService )
{
        $scope.title = "Let's go to the store!";
        $scope.products = productsService.getProducts( );
        $scope.productsLength = $scope.products.length;
        $scope.purchasedProducts = productsService.getPurchasedProducts( );
        $scope.purchasedProductsLength = $scope.purchasedProducts.length;
        $scope.product = angular.copy( productsService.product );
        // watch the $todos array for changes
        // Update the local store when the $todos array changes
        $scope.addProduct = function( )
        {
                productsService.addProduct( $scope.product );
        };
        $scope.deleteProduct = function( idx )
        {
                productsService.deleteProduct( idx );
        };
        $scope.updateProduct = function( idx, product )
        {
                alert( 'updating product.' );
                productsService.updateProduct( idx, product );
        };
} );
