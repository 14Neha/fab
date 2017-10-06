angular.module("personModel",[]);
angular.module("personModel").controller("viewDetailsController",["$scope",function ($scope) {

}]);

angular.module("personModel").directive("personDetails",function () {
  return{
restrict :'EACM',
templateUrl:"personalDetails.html",
transclude:true
}
})
// ----------------------------------------


angular.module("personModel").directive("sayHello",function () {
  return{
restrict :'EACM',
template:"Hello,  <ng-transclude></ng-transclude>...!!! How are You?",
transclude:true
}
})

// -------------------------------------------

angular.module("personModel").directive("sayBye",function () {
  return{
restrict :'EACM',
template:"Ok good to see you <ng-transclude></ng-transclude>, now bye bye...",
transclude:true
}
})

// -----------------------------------------------
