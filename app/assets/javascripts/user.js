'use strict';

(function() {
    var app = angular.module('ishaereUser', []);
    app.controller('userCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.getUser = function() {
            $http.get('user-test.json').
            success(function(data, status, headers, config) {
                $scope.user = data;
                if ($scope.user.preference.page === 'filter') {
                    $scope.tabUser = 'filter';
                }
            }).
            error(function(data, status, headers, config) {
                // log error
            });
        };
    }]);

    app.controller('profilCtrl', function() {

    });

    app.controller('shareCtrl', function() {

    });

    app.controller('ratingCtrl', function() {

    });

    app.controller('filterCtrl', function() {

    });
    app.controller('censureCtrl', function() {

    });
    app.controller('preferenceCtrl', function() {

    });



    app.directive('profil', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/profil.html',
            controller: 'profilCtrl',
            controllerAs: 'profil'
        };
    });
    app.directive('share', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/share.html',
            controller: 'shareCtrl',
            controllerAs: 'share'
        };
    });
    app.directive('rating', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/rating.html',
            controller: 'ratingCtrl',
            controllerAs: 'rating'
        };
    });
    app.directive('filter', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/filter.html',
            controller: 'filterCtrl',
            controllerAs: 'filter'
        };
    });
    app.directive('censure', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/censure.html',
            controller: 'censureCtrl',
            controllerAs: 'censure'
        };
    });
    app.directive('preference', function() {
        return {
            restrict: 'E',
            templateUrl: '../views/user/preference.html',
            controller: 'preferenceCtrl',
            controllerAs: 'preference'
        };
    });
})();