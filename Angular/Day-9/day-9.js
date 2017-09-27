var app = angular.module("myModule",[]);
app.controller("myController",function($scope,$http){
	$http.get("http://it-ebooks-api.info/v1/search/php").then(function success(response){
		$scope.Books=response.data.Books;
		
	},function failuer(response){
		
	})
	
	
})