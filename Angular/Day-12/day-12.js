angular.module("myApp",[]);
angular.module("myApp").controller("myController",function(){
	
});
angular.module("myApp").directive("nehaDirective",function(){
	return{
		template:"My name is <span ng-transclude=name>Neha</span> you can call me on <span ng-transclude=number>100</span> or mail me on <span ng-transclude=email>N/A</span>",
		transclude:{
			name:"myName",
			number:"myNumber",
			email:"myEmail"
		}
	};
	
})