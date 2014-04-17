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
            $scope.sweepstakesPivot = 0;
            $scope.radio = {model: undefined};
            
            $scope.radiosss = {model: undefined};
            $scope.radios = {model: undefined};
            
            $scope.radioss = {model: undefined};
            $scope.answerone = function(choice) {
                $scope.a1 = choice;
            };

            $scope.answertwo = function(choice) {
                $scope.a2 = choice;

            };
            $scope.answerthree = function(choice) {
                $scope.a3 = choice;
            }

            $scope.answerfour = function(choice) {
                $scope.userIntent = choice;
            };
            $scope.retakequiz = function() {

                $scope.sweepstakesPivot = '';
            }
            $http.get('js/products.json').success(function(data) {
                $scope.q1 = data.q1;
                $scope.q2 = data.q2;
                $scope.q3 = data.q3;
                $scope.q4 = data.q4;
                $scope.a4 = data.a4;
                $scope.designers = data.designers;
            })
            $scope.prevq = function() {
                $scope.sweepstakesPivot--;
            }
            $scope.nextq = function() {
                $scope.sweepstakesPivot++;
            }


        });
