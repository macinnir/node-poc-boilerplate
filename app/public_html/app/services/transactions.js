'use strict';
angular.module( 'test2App' ).service( 'transactionsService', function( localStorageService, $filter, awardsService, $http)
{

	// var Transaction = $resource.('/transactions/points/:txId', { txId: '@id' });
	// var
        this.pointsTransactions = [ ];
        this.moneyTransactions = [ ];
        this.balances = {
                money: 0.00,
                points: 0,
                pointsEarned: 0
        };
        this.getMoneyTransactions = function( )
        {
                var moneyTransactionsInStore = localStorageService.get( 'transactions-money' );
                this.moneyTransactions = moneyTransactionsInStore || [ ];
                return this.moneyTransactions;
        };
        this.getPointsTransactions = function( )
        {
                var pointsTransactionsInStore = localStorageService.get( 'transactions-points' );
                this.pointsTransactions = pointsTransactionsInStore || [ ];
                return this.pointsTransactions;
        };
        this.getBalances = function( )
        {
                var updatedBalances = localStorageService.get( 'balances' );
                if ( updatedBalances )
                {
                        this.balances = updatedBalances;
                }
                return this.balances;
        };
        this.moneyTransaction = {
                dateCreated: '',
                description: '',
                withdrawal: 0.00,
                deposit: 0.00,
                balance: 0.00
        };
        this.pointsTransaction = {
                dateCreated: '',
                description: '',
                withdrawal: 0.00,
                deposit: 0.00,
                balance: 0.00
        };
        this.spendPoints = function( qty, description )
        {
                var newPointsTransaction = angular.copy( this.pointsTransaction );
                newPointsTransaction.withdrawal = qty;
                newPointsTransaction.description = description;
                this.addPointsTransaction( newPointsTransaction );
        };
        this.spendMoney = function( qty, description )
        {
                var newMoneyTransaction = angular.copy( this.moneyTransaction );
                newMoneyTransaction.withdrawal = qty;
                newMoneyTransaction.description = description;
                this.addMoneyTransaction( newMoneyTransaction );
        };
        this.addMoney = function(qty, description)
        {
        	var newMoneyTransaction = angular.copy(this.moneyTransaction);
        	newMoneyTransaction.deposit = qty;
        	newMoneyTransaction.description = description;
        	this.addMoneyTransaction(newMoneyTransaction);
        };
        this.addPoints = function(qty, description)
        {
        	console.log(this.addPoints);
        	var newPointsTransaction = angular.copy(this.pointsTransaction);
        	newPointsTransaction.deposit = qty;
        	newPointsTransaction.description = description;
        	this.addPointsTransaction(newPointsTransaction);
        };
        this.addMoneyTransaction = function( newMoneyTransaction )
        {
                console.log( 'saving money transaction' );
                console.log('Money before: ', this.balances.money);

                var date = new Date( );
                if ( newMoneyTransaction.withdrawal > 0 )
                {
                        this.balances.money = parseFloat( this.balances.money ) - parseFloat( newMoneyTransaction.withdrawal );
                }
                else if ( newMoneyTransaction.deposit > 0 )
                {
                        this.balances.money = parseFloat( this.balances.money ) + parseFloat( newMoneyTransaction.deposit );
                }
                console.log('Money after: ', this.balances.money);
                newMoneyTransaction.dateCreated = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                newMoneyTransaction.balance = this.balances.money;
                this.moneyTransactions.push( newMoneyTransaction );
                localStorageService.set( 'transactions-money', this.moneyTransactions );
                localStorageService.set( 'balances', this.balances );
        };
        this.addPointsTransaction = function( newPointsTransaction )
        {
                var date = new Date( );
                if ( newPointsTransaction.withdrawal > 0 )
                {
                        this.balances.points = parseInt( this.balances.points ) - parseInt( newPointsTransaction.withdrawal );
                }
                else if ( newPointsTransaction.deposit > 0 )
                {
                        this.balances.points = parseInt( this.balances.points ) + parseInt( newPointsTransaction.deposit );
                        this.balances.pointsEarned = parseInt( this.balances.pointsEarned ) + parseInt( newPointsTransaction.deposit );
                }

                newPointsTransaction.dateCreated = $filter( 'date' )( new Date( ), 'yyyy-MM-dd HH:mm:ss' );
                newPointsTransaction.balance = this.balances.points;
                this.pointsTransactions.push( newPointsTransaction );
                localStorageService.set( 'transactions-points', this.pointsTransactions );
                localStorageService.set( 'balances', this.balances );
                awardsService.updateAwards(this.balances.points);
        };
} );
