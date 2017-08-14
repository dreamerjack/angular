'use strict';
angular.module('app').directive('appHeadBar',[function(){

return{
restrict: 'A',
replace:true,
templateUrl:'view/template/headbar.html',
scope:{
	text:'@'
},
link:function(scope,element,attr){

	scope.back=function(){
	window.history.back();	
	}

}
};
}]);