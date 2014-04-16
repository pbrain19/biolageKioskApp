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
        .controller('sweepstakesCTRL', function($scope, $http) {

            $http.get('js/products.json').success(function(data) {

                $scope.q1 = data.q1;
                $scope.q2 = data.q2;

                $scope.q3 = data.q3;
                $scope.q4 = data.q4;


                $scope.a4 = data.a4;


                $scope.designers = data.designers;
                console.log($scope.q1);
                console.log($scope.q2);
                console.log($scope.q3);
                console.log($scope.q4);
                console.log($scope.a4);
                console.log($scope.designers);


            })



        });
