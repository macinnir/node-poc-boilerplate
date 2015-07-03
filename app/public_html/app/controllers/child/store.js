'use strict';
/**
 * @ngdoc function
 * @name test2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test2App
 */
angular.module( 'test2App' ).controller( 'ChildStoreCtrl', function( $routeParams, $filter, $scope, productsService, transactionsService )
{
        $scope.title = "Let's go to the store!";
        $scope.products = productsService.getProducts( );
        $scope.productsLength = $scope.products.length;
        $scope.purchasedProducts = productsService.getPurchasedProducts( );
        $scope.purchasedProductsLength = $scope.purchasedProducts.length;
        $scope.balances = transactionsService.getBalances( );
        // watch the $todos array for changes
        // Update the local store when the $todos array changes
        $scope.buyProduct = function( idx )
        {
                if ( $scope.products[ idx ].priceMoney > 0 )
                {
                        transactionsService.spendMoney( $scope.products[ idx ].priceMoney, 'Purchased ' + $scope.products[ idx ].title );
                }
                else if ( $scope.products[ idx ].pricePoints > 0 )
                {
                        transactionsService.spendPoints( $scope.products[ idx ].pricePoints, 'Purchased ' + $scope.products[ idx ].title );
                }
                $scope.balances = transactionsService.getBalances( );
                productsService.purchaseProduct( idx );
                $scope.products = productsService.getProducts( );
                $scope.productsLength = $scope.products.length;
                $scope.purchasedProducts = productsService.getPurchasedProducts( );
                $scope.purchasedProductsLength = $scope.purchasedProducts.length;
        };
        $scope.addProduct = function( )
        {
                var newProduct = {};
                angular.copy( $scope.product, newProduct );
                var date = new Date( );
                newProduct.dateAdded = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                $scope.products.push( newProduct );
        };
        $scope.removeProduct = function( idx )
        {
                $scope.products.splice( idx, 1 );
        };
        $scope.updateProduct = function( idx, data )
        {
                $scope.products[ idx ] = data;
        };
} );
