angular.module("myModule",[]);
		angular.module("myModule").controller("myController",function($scope){
		$scope.novel=novels;
		
		$scope.toggle = function(thisfn) {
			console.log(thisfn);
			if(!thisfn.thisfn){
				thisfn.thisfn=true;
				
			}
			else {
				
				thisfn.thisfn=false;
			}
		};
		
});
		

	angular.module("myModule").filter("thash", function(){
	return function(item,bol){
		item=item+"";
		var str="";
		if(!bol)
		{
			var i=item.length;
			console.log(i);
			for (j=1;j<=i;j++){
				str+="#";
		}
		return str;
		}
			
			else {
				return item;
			}
			
		}
	})	