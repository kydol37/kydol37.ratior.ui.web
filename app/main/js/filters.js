'use strict';

define(['angular', 'services'], function (angular, services) {

	/* Filters */
	
	angular.module('ratiorApp.filters', ['ratiorApp.services'])
		.filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
	}]);
});
