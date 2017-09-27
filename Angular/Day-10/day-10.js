angular.module("myModule",[]);
angular.module("myModule").controller("myController",["getPerson",function (getPerson) {
  this.person={name:"Neha",number:999999999999};
  getPerson.getData(this.person);
}]);

angular.module("myModule").controller("yourController",["getPerson",function (getPerson) {
  this.person={number:999999999999};
  getPerson.setData(this.person);
}]);

angular.module("myModule").service("getPerson",function ($http) {
  this.getData=function(per) {
    $http.get("https://randomuser.me/api").then(function (data) {      per.name=data.data.results[0].name.first;
    });
  };
this.details=null;
this.setData = function(per) {
  if(!this.details)
  {
    $http.get("https://randomuser.me/api").then(function (data) {      this.details=data.data.results[0];
    });
  }
  else {
    per.name.this.details.name.first;
  }
}

});
