'use strict';

/**
 * @ngdoc overview
 * @name shareApp
 * @description
 * # shareApp
 *
 * Main module of the application.
 */
(function() {

    // var app = angular.module('ishaere', ['ishaereHome', 'ishaereAbout', 'ishaereContact', 'ishaereUser']);
    var app = angular.module('iShaere', ['templates']);

    app.controller('navCtrl', ['$scope', function($scope) {
    }]);

    app.directive('content', function() {
        return {
            restrict: 'E',
            templateUrl: 'home.html'
            // link: function(scope, element, attrs) {
            // 		templateUrl: '<p>test</p>'
            //     scope.getContentUrl = function(content) {
            //         switch (content) {
            //             case 'home':
            //                 return 'home.html';

            //             case 'about':
            //                 return '../views/about.html';

            //             case 'contact':
            //                 return '../views/contact.html';

            //             case 'user':
            //                 return '../views/user.html';

            //         }
            //     };
            // },
            // template: '<div ng-include="getContentUrl(contentTab)"></div>'
        };
    });
    // app.directive('scroll', function($window) {
    //     return function(scope, element, attrs) {
    //         angular.element($window).bind('scroll', function() {
    //             if (this.pageYOffset >= 20) {
    //                 scope.scroll = true;
    //             } else {
    //                 scope.scroll = false;
    //             }
    //             scope.$apply();
    //         });
    //     };
    // });

})();