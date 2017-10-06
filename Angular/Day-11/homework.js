angular.module("myApp",[]);
angular.module("myApp").controller("myController",function($scope,$http){
	$http.get("https://swapi.co/api/people/").then (function success(response){
		$scope.people=response.data.results
		
		
	},function fail(response){
		
	})
	
	
	
})
angular.module("myApp").directive("viewDetail", function(){
	return{
		templateUrl: "hdeatils.html"
	}
	
})
angular.module("myApp").directive("welcome",function(){
	return{
		template:"welcome <ng-transclude>Nobody</ng-transclude> in the class",
		transclude:true
	}
})