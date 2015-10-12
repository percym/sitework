
	'use strict';
angular.module('geo', [])
	.controller('geoCtrl', ['$scope', '$http', function($scope, $http) {
		$http.jsonp('http://ipinfo.io/?callback=JSON_CALLBACK')
			.success(function(data) {
			$scope.ip = data.ip;
			$scope.hostname = data.hostname;
			$scope.loc = data.loc; //lat-longtitude
			$scope.org = data.org; //organization
			$scope.city = data.city;
			$scope.region = data.region; //state
			$scope.country = data.country;
			$scope.postal = data.postal; //city area code
		});
	}]);
