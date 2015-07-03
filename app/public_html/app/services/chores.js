'use strict';
angular.module( 'test2App' ).service( 'choresService', function( localStorageService, $rootScope, $filter, $http, $q )
{
        this.chores = [ ];
        this.choreCount = 0;
        var chore = {
                name: '',
                description: '',
                priceMoney: 0,
                pricePoints: 0,
                finished: 0,
                approved: 0,
                dateCreated: '',
                lastUpdated: ''
        };
        this.getChores = function( )
        {
        	var deferred = $q.defer();
        	var self = this;
        	return $http.get('http://localhost:8080/chores')
        		.success(function(data, status, headers, config) {
        			self.chores = data;
        			console.log(self);
        		});
        		// .success(function(data, status, headers, config){
        		// 	self.chores = data;
        		// });

        	    // var choresInStore = localStorageService.get( 'chores' );
                // this.chores = choresInStore || [ ];
                // return this.chores;
        };
        this.resetChore = function( )
        {
                chore.name = '';
                chore.priceMoney = 0.00;
                chore.pricePoints = 0;
                chore.finished = 0;
                chore.approved = 0;
        };
        this.updateChores = function( )
        {
                localStorageService.set( 'chores', this.chores );
                console.log( 'updating chores!', this.chores );
        };
        this.addChore = function( chore )
        {
                var newChore = {};
                angular.copy( chore, newChore );
                newChore.name = chore.name;
                newChore.price = chore.priceMoney;
                newChore.pricePoints = chore.pricePoints;
                newChore.dateCreated = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                this.chores.push( newChore );
                this.updateChores( );
        };
        this.removeChore = function( index )
        {
                this.chores.splice( index, 1 );
                this.updateChores( );
        };
        this.updateChore = function( idx, chore )
        {
                console.log( 'Index', idx );
                console.log( 'originalChore', this.chores[ idx ] );
                console.log('updatedChore', chore);
                this.chores[ idx ] = chore;
                this.chores[ idx ].lastUpdated = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                console.log('saved chore', this.chores[idx]);
                console.log( this.chores[ idx ] );
                this.updateChores( );
        };
        this.finishChore = function( idx )
        {
                this.chores[ idx ].finished = 1;
                this.updateChores( );
        };
        this.approveChore = function( idx )
        {
                this.chores[ idx ].approved = 1;
                this.updateChores( );
                $rootScope.$emit( 'work:chore:approved' );
        };
        this.duplicateChore = function( idx )
        {
                var newChore = angular.copy( this.chores[ idx ] );
                newChore.finished = 0;
                newChore.approved = 0;
                newChore.dateCreated = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                $http.post('http://localhost:8080/chores', newChore)
                	.success(function(data) {

                		this.chores.push( newChore );
                		// this.updateChores( );

                		console.log(data);
                	}
                );
        };
} );
