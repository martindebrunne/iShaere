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
    var app = angular.module('iShaere', ['templates', 'ishaereHome', 'ishaereAbout', 'ishaereContact', 'ishaereUser']);

    app.controller('navCtrl', ['$scope', function($scope) {}]);

    app.directive('content', function() {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                scope.getContentUrl = function(content) {
                    switch (content) {
                        case 'home':
                            return 'home.html';

                        case 'about':
                            return 'about.html';

                        case 'contact':
                            return 'contact.html';

                        case 'user':
                            return 'user.html';

                    }
                };
            },
            replace: true,
            template: '<div ng-include="getContentUrl(selectContent)">dsds</div>'
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