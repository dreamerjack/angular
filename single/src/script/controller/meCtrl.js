'use strict';
angular.module('app').controller('meCtrl',['cache','$http','$state','$scope',function(cache,$http,$state,$scope){

if(cache.get('name')){
	$scope.name=cache.get('name');
	$scope.image=cache.get('image');
}
$scope.logout=function(){
	cache.remove('id');
	cache.remove('image');
	cache.remove('name');
	$state.go('main');
}

}]);