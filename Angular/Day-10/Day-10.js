angular.module("myApp",[]);
angular.module("myApp").controller("mycontroller",["myService",function(myService){
	this.name=myService.name;
}]);


angular.module("myApp").controller("yourcontroller",["myService",function(myService){
	this.name=myService.name;
}]);


angular.module("myApp").service("myService",function(){
	this.name="7891423";
	
})