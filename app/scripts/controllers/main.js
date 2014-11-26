'use strict';

/**
 * @ngdoc function
 * @name vimondApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vimondApp
 */
angular.module('vimondApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var load = function(){
		$http.get('http://api.ulriken.vimondtv.com/api/web/search/categories/999/assets.json').success(function(data){
			console.log(data);
			$scope.loaded_demos = data.assets.asset;
		});
	};
	load();
  });
