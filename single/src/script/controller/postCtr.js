'use strict';
angular.module('app').controller('postCtrl',['$http','$scope',function($http,$scope){
$scope.tablist=[{
	id:'all',
	name:'全部'
}, {
	id: 'pass',
	name:'面试邀请'
},

{id:'fail',
name:'不合适'

}

];

$http.get('data/myPost.json').then(function(data){

	$scope.positionlist=data.data;
})
}]);