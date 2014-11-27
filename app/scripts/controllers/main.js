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
    $scope.closePopup = function(){
    	document.querySelector('#asset-popup').style.display = 'none';
    };
    $scope.getAsset = function(url){
    	document.querySelector('#asset-loader').style.display = 'block';
    	$http.get('http://api.ulriken.vimondtv.com'+url+'.json').success(function(data){
			$scope.asset_data = data.asset;
			document.querySelector('#asset-loader').style.display = 'none';
			document.querySelector('#asset-popup').style.display = 'block';
		});
    };
    
    var load = function(){
		$http.get('http://api.ulriken.vimondtv.com/api/web/search/categories/999/assets.json').success(function(data){
			console.log(data);
			$scope.loaded_demos = data.assets.asset;
		});
	};
	load();
  });
