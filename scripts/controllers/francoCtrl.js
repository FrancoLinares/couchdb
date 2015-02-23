angular.module('francoApp')
	.controller('francoCtrl',
		['$scope', '$modal','francoFact',
			function($scope, $modal, francoFact){

			francoFact.get().then(function(resp){
				$scope.usuarios = resp;
			});

	        $scope.add = function(){
	                var modal = $modal.open({
	                    templateUrl: 'modal-new.html',
	                    controller: 'modalNewCtrl',
	                    size: 'lg'
	                 });

	                modal.result.then(function(data) {
	                    $scope.insert(data);
	                });
	        };

			$scope.insert = function(obj){
				francoFact.post(obj, function(rev){
					obj.key = rev;
					$scope.usuarios.push({"id":obj.id, "key": obj.key, "value":{"nombre":obj.nombre,"apellido":obj.apellido}});
				});
			};

			$scope.remove = function() {
            var old = $scope.usuarios;
            $scope.usuarios = [];

            old.forEach(function(u) {
                if(u.selected) {
                    francoFact.remove(u);
                } else {
                    $scope.usuarios.push(u);
                }
            });
        };
	}]);