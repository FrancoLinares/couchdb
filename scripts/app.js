var francoApp = angular.module('francoApp',['ngRoute','ui.bootstrap','selectionModel'])
    .constant("BASEURL", (function() {
        var url = window.location.origin + "/";
        return url;
    })());

francoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        otherwise({
            templateUrl: 'index.html',
            controller: 'francoCtrl'
        });
}]);