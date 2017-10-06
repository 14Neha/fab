var app=angular.module("myModule",[]);
app.controller("myController",function ($scope,$http) {
$http.get("http://it-ebooks-api.info/v1/search/php").then(function sucessCallback(responseText) {
  $scope.Books=responseText.data.Books;
},function failuerCallback(responseText) {

})


})
//Alohomora*19
