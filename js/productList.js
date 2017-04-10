app.controller('productList',
	function($scope){
		$scope.products = [
			{
				name: "Orchestral Essentials",
				description: "Lorem ipsum text",
				categories: "cinematic",
				image: "img/orchestral-essentials.jpg"
			},
			{
				name: "Kinetic Treats",
				image: "img/kinetic-treats.jpg",
				description: "Lorem ipsum text",
				categories: "atmospheric"
			},
			{
				name: "Juggernaut",
				image: "img/juggernaut.png",
				description: "Lorem ipsum text",
				categories: "world"
			}
		];
		
		$scope.filtersApplied = filtersApplied = [];
		$scope.categoryToFilter = function(cat){
			if(filtersApplied.indexOf(cat)==-1){
				filtersApplied.push(cat);
			}else{
				filtersApplied.splice(filtersApplied.indexOf(cat),1);
			}
		}
		
		$scope.removeFilters = function(){
			document.querySelector('input[name="category"]').checked = false;
			filtersApplied.length = 0;
		}
	}
);
	