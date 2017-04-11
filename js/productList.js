app.controller('productList',
	function($scope){
		$scope.categories = [
			{name: "cinematic", selected: false},
			{name: "atmospheric", selected: false},
			{name: "world", selected: false}
		]
		$scope.products = [
			{
				name: "Orchestral Essentials",
				description: "Lorem ipsum text",
				categories: ["cinematic"],
				image: "img/orchestral-essentials.jpg"
			},
			{
				name: "Kinetic Treats",
				image: "img/kinetic-treats.jpg",
				description: "Lorem ipsum text",
				categories: ["atmospheric","world"]
			},
			{
				name: "Juggernaut",
				image: "img/juggernaut.png",
				description: "Lorem ipsum text",
				categories: ["world","cinematic"]
			}
		];
		
		$scope.showAll = true;
		
		$scope.applyFilter = function() {
			for(category in $scope.categories){
				if($scope.categories[category].selected){
					$scope.showAll = false;
					return;
				}
			}
			$scope.showAll = true;
		};
		
		
		
		$scope.appliedFilters = function(product){
			if ($scope.showAll){
				return true;
			}
			for(category in $scope.categories){
				var currentCat = $scope.categories[category];
				if(currentCat.selected){
					if(product.categories.indexOf(currentCat.name) != -1){
						return true;
					}
				}
			}
		}
		
		$scope.resetFilters = function(){
			
			for(category in $scope.categories){
				var currentCat = $scope.categories[category];
				currentCat.selected = false;
			}
			$scope.showAll = true;
		}
	}
);
	