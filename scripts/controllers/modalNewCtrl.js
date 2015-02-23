angular.module('francoApp')
	.controller('modalNewCtrl',
		['$scope','$modalInstance',
		function($scope, $modalInstance){

			$scope.ok = function(){
				var id = CryptoJS.SHA1($scope.nombre + "." + $scope.apellido).toString();

				var res = {
					"id": 		id,
					"nombre": 	$scope.nombre,
					"apellido": $scope.apellido 	
				};

				$modalInstance.close(res);
			};

	        $scope.cancel = function() {
	            $modalInstance.dismiss('cancel');
	        };
	}]);