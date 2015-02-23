angular.module('francoApp')
	.factory('francoFact', 
		['BASEURL','$q', '$http',
		function(BASEURL, $q, $http) {
			var francoFact = {};

			francoFact.get = function(){
				var deferred = $q.defer();

				//url = BASEURL + "/" + ws + "/_design/rank/_view/host?group=true";
				url = BASEURL + "users/_design/users/_view/users";

	            $http.get(url).then(function(response){
	                deferred.resolve(response.data.rows);
	            }, function(){
	                deferred.reject();
	            });

	            return deferred.promise;
			};

			francoFact.post = function(dato, callback){
				url = BASEURL + "users/" + dato.id;

                $http.put(url, dato).success(function(d, s, h, c) {
                    callback(d.rev, []);
                });
			};

	        francoFact.remove = function(dato) {
	            var url = BASEURL + "users/" + dato.id + "?rev=" + dato.key;
	            $http.delete(url).success(function(d, s, h, c) {});
	        };

			return francoFact;
	}]);