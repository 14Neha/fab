angular.module("bookModule",[]);
angular.module("bookModule").controller("searchBookController",function ($scope,$http) {

  $scope.getData= function () {
      var url = "http://it-ebooks-api.info/v1/search/";
      url+=$scope.searchText;
      $http.get(url).then(function sucess(responseText) {
        $scope.Books=responseText.data.Books;
      },function fail(responseText) {
        console.log(responseText+":(");
      })
  }
})
