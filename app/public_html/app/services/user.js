'use strict';
angular.module( 'test2App' ).service( 'userService', function( localStorageService)
{
	this.user = {
		level: 0,
		role: 'child',
		totalPoints: 0,
		money: 0,
		points: 0
	};
        this.getUser = function() {
        	this.user = localStorageService.get('user');
        	return this.user;
        };

        this.updateUser = function(data) {

        	var changed = 0;

        	for(var d in data)
        	{
        		if(typeof this.user[d] === 'undefined')
        		{
        			throw new Error('User property ' + d + ' does not exist.');
        		}
        		if(this.user[d] !== data[d])
        		{
        			changed++;
			this.user[d] = data[d];
        		}
        		localStorageService.set('user', this.user);
        	}

        }
} );
