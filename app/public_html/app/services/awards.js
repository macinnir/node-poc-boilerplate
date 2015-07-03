'use strict';
angular.module( 'test2App' ).service( 'awardsService', function( userService, $rootScope )
{
	this.level = 0;
        this.awards = [
        	{ name: "Test award!", pointsRequired: 100, level: 1 }
        ];
        this.awardsEarned = [ ];

        var awardEarned = {
                name: '',
                totalPoints: 0,
                level: 0
        };

        this.getLevel = function() {
        	localStorageService.get('level');
        };

        this.getAwardsEarned = function( )
        {
                var awardsEaredInStore = localStorageService.get( 'awardsEarned' );
                this.awardsEarned = awardsEarnedInStore || [ ];
                return this.awardsEarned;
        };

        this.updateAwards = function(currentPointBalance) {

        	var user = userService.getUser();

        	for(var a in this.awards)
        	{
        		if(user.level < this.awards[a].level && this.awards[a].pointsRequired <= currentPointBalance)
        		{
        			user.level = parseInt(user.level) + 1;
        			userService.updateUser({ level: user.level });
        			alert('You are now at level ' + this.level + '!');
        		}
        	}
        };

} );
