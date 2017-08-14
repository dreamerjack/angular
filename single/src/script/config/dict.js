'use strict';
angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http){
$http.get('data/city.json').then(function(data){

	dict.city=data.data;
});

$http.get('data/salary.json').then(function(data){

	dict.salary=data.data;
});

$http.get('data/scale.json').then(function(data){

	dict.scale=data.data;
});



}]);