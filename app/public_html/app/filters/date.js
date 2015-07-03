'use strict';
angular.module('dateFilters', []).filter('simpleDate', function($filter) {
	return function(dateStr) {
		if(!dateStr || !dateStr.length)
		{
			return;
		}
		var o = dateStr.replace(/-/g, "/");
		return $filter('date')(Date.parse(o + "-0000"), 'MMM d');
	}
});