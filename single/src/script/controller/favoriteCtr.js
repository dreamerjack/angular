'use strict';
angular.module('app').controller('favoriteCtrl',['$http','$scope',function($http,$scope){
$http.get('data/myFavorite.json').then(function(data){
	
	$scope.positionlist=data.data;
})
}]);