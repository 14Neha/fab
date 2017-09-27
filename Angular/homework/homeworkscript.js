angular.module("myModule",[]);
		angular.module("myModule").controller("myController",function($scope){
		$scope.novel=novels;
		
		$scope.toggle = function(thisfn) {
			
			if(!thisfn.thisf){
				thisfn.thisf=true;
				
			}
			else {
				
				thisfn.thisf=false;
			}
		}
myApp.filter("hash" function(){
	return function('item',bol){
		if(!bol){
			var i=item.length;
			var str="";
			for (j=1;j<=i;j++){
				str+="#";
			}
			return str;
			else {
				return item;
			}
			
		}
	}
	
})
		
		})