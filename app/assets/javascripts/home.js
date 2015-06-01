'use strict';

(function() {
    var app = angular.module('ishaereHome', []);
    app.controller('homeCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
        $scope.getItems = function() {
            $http.get('home-test.json').
            success(function(data, status, headers, config) {
                $scope.items = data;
            }).
            error(function(data, status, headers, config) {
                // log error
            });
        };
        $scope.getItems();
        $interval(function() {
            $scope.getItems();
        }, 5000);

    }]);
})();