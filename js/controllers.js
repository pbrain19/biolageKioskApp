'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('homeCTRL', function($scope, $location) {

            $scope.imagesets = [
                ['/set1/biolaggirl.png', '/set1/touch.png', '/set1/to.png', '/set1/enter.png', '/set1/and.png', '/set1/win.png'],
                ['/set2/biolagebottles.png', '/set2/find.png', '/set2/our.png', '/set2/designers.png', '/set2/picks.png', '/set2/see.png']


            ];
            $scope.currentIndex = 0;
            $scope.sweepstakes = function() {


            }
            $scope.change = function() {
                $scope.currentIndex = ($scope.currentIndex + 1) % 2;
            }

        })
        .controller('sweepstakesCTRL', function($scope) {
            $scope.q1 = {};
            $scope.q2 = { };

            $scope.q3 = {};
            $scope.q4 = { };


            $scope.a4 ={};


            $scope.designers = [ ];


        });
