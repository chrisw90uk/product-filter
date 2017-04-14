app.controller('productList',
	function($scope){
		$scope.categories = [
			{name: "Cinematic", selected: false},
			{name: "Atmospheric", selected: false},
			{name: "Electronic", selected: false},
			{name: "Jazz", selected: false},
		]
		$scope.products = [
			{
				name: "Orchestral Essentials",
				description: "A comprehensive pack of realistic orchestral instruments",
				categories: ["Cinematic"],
				image: "img/orchestral-essentials.jpg"
			},
			{
				name: "Kinetic Treats",
				image: "img/kinetic-treats.jpg",
				description: "Weird and wonderful sounds",
				categories: ["Atmospheric"]
			},
			{
				name: "Juggernaut",
				image: "img/juggernaut.png",
				description: "Percussive hits and evolving pads",
				categories: ["Electronic","Cinematic"]
			},
			{
				name: "Session Horns",
				image: "img/session-horns.jpg",
				description: "Brass instruments for pop and jazz",
				categories: ["Jazz","Cinematic"]
			}
		];
		
		$scope.showAll = true;
		
		//this is mostly to estabish whether to show all or not
		
		$scope.applyFilter = function() {
			for(category in $scope.categories){
				if($scope.categories[category].selected){
					$scope.showAll = false;
					return;
				}
			}
			$scope.showAll = true;
		};
		
		
		
		$scope.appliedFilters = function(currentProduct){
			if ($scope.showAll){
				return true;
			}
			for(category in $scope.categories){
				var currentCat = $scope.categories[category];
				if(currentCat.selected){
					if(currentProduct.categories.indexOf(currentCat.name) != -1){
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
	