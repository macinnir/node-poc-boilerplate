'use strict';
angular.module( 'test2App' ).service( 'productsService', function( localStorageService, $filter )
{
        this.products = [ ];
        this.purchasedProducts = [ ];
        this.product = {
                dateAdded: '',
                datePurchased: '',
                title: '',
                description: '',
                priceMoney: 0.00,
                pricePoints: 0.00
        };
        this.getProducts = function( )
        {
                this.products = localStorageService.get( 'products' ) || [ ];
                return this.products;
        };
        this.getPurchasedProducts = function( )
        {
                this.purchasedProducts = localStorageService.get( 'purchased-products' ) || [ ];
                return this.purchasedProducts;
        };
        this.updateProducts = function( )
        {
                localStorageService.set( 'products', this.products );
        };
        this.updatePurchasedProducts = function( )
        {
                localStorageService.set( 'purchased-products', this.purchasedProducts );
        };
        this.purchaseProduct = function( idx )
        {
                var purchasedProduct = this.products.splice( idx, 1 )[ 0 ];
                purchasedProduct.datePurchased = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                console.log( purchasedProduct );
                this.purchasedProducts.push( purchasedProduct );
                this.updatePurchasedProducts( );
                this.updateProducts( );
        };
        this.addProduct = function( product )
        {
                var newProduct = angular.copy( this.product );
                newProduct.dateAdded = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                newProduct.title = product.title;
                newProduct.description = product.description;
                newProduct.priceMoney = product.priceMoney;
                newProduct.pricePoints = product.pricePoints;
                this.products.push( newProduct );
                this.updateProducts( );
        };
        this.deleteProduct = function( idx ) {
        	this.products.splice(idx, 1);
        	this.updateProducts();
        };

        this.updateProduct = function(idx, product) {
        	this.products[idx] = product;
        	this.updateProducts();
        };
} );
