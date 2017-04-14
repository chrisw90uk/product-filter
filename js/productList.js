app.controller('productList',
	function($scope){
		$scope.categories = [
			{name: "cinematic", selected: false},
			{name: "contemporary", selected: false},
			{name: "electronic", selected: false},
			{name: "atmospheric", selected: false},
			{name: "world", selected: false},
			{name: "jazz", selected: false},
			{name: "pop", selected: false},
		]
		$scope.products = [
			{
				name: "halion Symphonic Orchestra",
				image: "img/halion.png",
				description: "A lightweight but comprehensive orchestral library",
				categories: ["orchestral","cinematic"]
			},
			{
				name: "Orchestral Essentials",
				description: "A quintessential orchestral library",
				categories: ["cinematic"],
				image: "img/orchestral-essentials.png"
			},
			{
				name: "Kinetic Treats",
				image: "img/kinetic-treats.png",
				description: "A weird and wonderful selection of evolving textures",
				categories: ["atmospheric","contemporary"]
			},
			{
				name: "Juggernaut",
				image: "img/juggernaut.png",
				description: "Cutting-edge electronic sound design.",
				categories: ["electronic","atmospheric","cinematic"]
			},
			{
				name: "Session Horns",
				image: "img/session-horns.png",
				description: "A versatile 4-piece brass ensemble",
				categories: ["pop","jazz","cinematic"]
			},
			{
				name: "Session Strings",
				image: "img/session-strings.png",
				description: "A clean 11-piece string ensemble",
				categories: ["pop","cinematic"]
			},
			{
				name: "Kinetic Metal",
				image: "img/kinetic-metal.png",
				description: "Unorthodox metallic sounds and textures",
				categories: ["electronic","cinematic","atmospheric","contemporary"]
			},
			{
				name: "India: Discovery Series",
				image: "img/india.png",
				description: "A massive selection of traditional Indian instruments",
				categories: ["world","atmospheric"]
			},
			{
				name: "West Africa: Discovery Series",
				image: "img/west-africa.png",
				description: "A huge assortment of authentic African instruments",
				categories: ["world","atmospheric"]
			},
			{
				name: "Studio Drummer",
				image: "img/studio-drummer.png",
				description: "Premium drum kits from Pearl, Yamaha and Sonor",
				categories: ["pop","jazz"]
			},
			{
				name: "Vintage Organs",
				image: "img/vintage-organs.png",
				description: "The authentic sound of five classic organs",
				categories: ["pop","jazz"]
			},
			{
				name: "Massive",
				image: "img/massive.png",
				description: "A heavyweight synthesiser packed with thousands of sounds",
				categories: ["electronic"]
			},
			{
				name: "Monark",
				image: "img/monark.png",
				description: "The essential analogue synthesiser",
				categories: ["electronic"]
			},
			{
				name: "Absynth 5",
				image: "img/absynth.png",
				description: "A versatile synth packed with melodic and textural sounds",
				categories: ["electronic","atmospheric"]
			},
			{
				name: "Una Corda",
				image: "img/una-corda.png",
				description: "Everything you can imagine from a real contemporary piano",
				categories: ["orchestral","contemporary"]
			}
		];
		
		//for sorting 
		$scope.itemName = ['name'];
		
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
	