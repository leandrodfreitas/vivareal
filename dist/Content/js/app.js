var app = angular.module("app",[]);

app.controller('imoveisController', function($scope, $http, $filter) {
	
	$scope.loading = true;
	
   $http.get('http://spotippos.vivareal.com/properties?ax=1&ay=1&bx=1400&by=1000')
	.success(function(data){		
		$scope.lista = data.properties;
	})
	.finally(function () {
      $scope.loading = false;
   });
	
});