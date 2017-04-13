app.controller('productList',
	function($scope){
		$scope.categories = [
			{name: "cinematic", selected: false},
			{name: "atmospheric", selected: false},
			{name: "world", selected: false},
			{name: "jazz", selected: false},
			{name: "pop", selected: false}
		]
		$scope.products = [
			{
				name: "Orchestral Essentials",
				description: "Lorem ipsum text",
				categories: ["cinematic"],
				image: "img/orchestral-essentials.png"
			},
			{
				name: "Kinetic Treats",
				image: "img/kinetic-treats.png",
				description: "Lorem ipsum text",
				categories: ["atmospheric"]
			},
			{
				name: "Juggernaut",
				image: "img/juggernaut.png",
				description: "Lorem ipsum text",
				categories: ["electronic","atmospheric","cinematic"]
			},
			{
				name: "Session Horns",
				image: "img/session-horns.png",
				description: "Lorem ipsum text",
				categories: ["pop","jazz","cinematic"]
			},
			{
				name: "Session Strings",
				image: "img/session-strings.png",
				description: "Lorem ipsum text",
				categories: ["pop","cinematic"]
			},
			{
				name: "Kinetic Metal",
				image: "img/kinetic-metal.png",
				description: "Lorem ipsum text",
				categories: ["electronic","cinematic","atmospheric"]
			},
			{
				name: "India: Discovery Series",
				image: "img/india.png",
				description: "Lorem ipsum text",
				categories: ["world","atmospheric"]
			},
			{
				name: "West Africa: Discovery Series",
				image: "img/west-africa.png",
				description: "Lorem ipsum text",
				categories: ["world","atmospheric"]
			},
			{
				name: "Studio Drummer",
				image: "img/studio-drummer.png",
				description: "Lorem ipsum text",
				categories: ["pop","jazz"]
			}
		];
		
		$scope.productName = ['name'];
		
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
	