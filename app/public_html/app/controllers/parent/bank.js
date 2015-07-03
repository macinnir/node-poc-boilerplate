angular.module( 'test2App' ).controller( 'ParentBankCtrl', function( $filter, $routeParams, $scope, localStorageService, transactionsService )
{
        $scope.title = 'My Bank';
        $scope.moneyTransactions = transactionsService.getMoneyTransactions( );
        $scope.pointsTransactions = transactionsService.getPointsTransactions( );
        $scope.balances = transactionsService.getBalances( );
        $scope.moneyTransaction = angular.copy( transactionsService.moneyTransaction );
        $scope.pointsTransaction = angular.copy( transactionsService.pointsTransaction );

        $scope.addMoneyTransaction = function( )
        {
                console.log( 'adding money transaction' );
                transactionsService.addMoneyTransaction( $scope.moneyTransaction );
                $scope.moneyTransactions = transactionsService.getMoneyTransactions( );
                $scope.balances = transactionServices.getBalances( );
        };
        $scope.addPointsTransaction = function( )
        {
                console.log( 'adding points transaction' );
                transactionsService.addPointsTransaction( $scope.pointsTransaction );
                $scope.pointsTransactions = transactionsService.getPointsTransactions( );
                $scope.balances = transactionServices.getBalances( );
        };
} );