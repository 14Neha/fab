angular.module("personModel",[]);
angular.module("personModel").controller("viewDetailsController",["$scope",function ($scope) {

}]);

angular.module("personModel").directive("personDetails",function () {
  return{
restrict :'EACM',
templateUrl:"personalDetails.html"
}
})
