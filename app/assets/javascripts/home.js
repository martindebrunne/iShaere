'use strict';

(function() {
    var app = angular.module('ishaereHome', ['ngResource']);
    app.controller('homeCtrl', ['$scope', '$resource', '$http', '$interval', function($scope, $resource, $http, $interval) {
        // $scope.getItems = function() {
        //     $http.get('home-test.json').
        //     success(function(data, status, headers, config) {
        //         $scope.items = data;
        //     }).
        //     error(function(data, status, headers, config) {
        //         // log error
        //     });
        // };
        // $scope.getItems();
        var Items = $resource("/items/:id", {
            id: "@id",
            updated_at: "DESC",
            title: "ASC",
            vues: "DESC"
        }, {
            update: {
                method: "PUT"
            }
        });
        $scope.items = Items.query();
        $interval(function() {
            $scope.items = Items.query();
        }, 10000);
    }]);
})();