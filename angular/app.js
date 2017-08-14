// create module
var myApp = angular.module('myModule',[]);
// create controller of module myModule
myApp.controller('myController',myController);
 function myController($scope) {
     $scope.message= 'AngularJS'

 }