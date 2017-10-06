angular.module("myApp",[]);
angular.module("myApp").controller("myController",function($scope,$http){
	$http.get("https://swapi.co/api/people/").then (function success(response){
		$scope.people=response.data.results;
		console.log($scope.people);
	})
});

angular.module("myApp").directive("bio" , function(){
	return {
		templateUrl:"personBio.html",
		scope:{
			person:"=personData"
		}
	};
	
})