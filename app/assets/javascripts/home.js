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
        // $interval(function() {
        //     $scope.getItems();
        // }, 5000);
        var Items = $resource("/items/:id", {id: "@id"}, {update: {method:"PUT"}});
        $scope.items = Items.query();
    }]);
})();