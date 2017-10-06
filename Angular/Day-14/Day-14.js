angular.module("myApp",[]);
// ------------------------------------------------
angular.module("myApp").controller("myController",function () {
this.name="Mayank";
})

angular.module("myApp").directive("showAlert",function () {
  return {
    scope:{
    inp:"=",
    color:"@rang"
},
    templateUrl:"temp.html"

};
})
