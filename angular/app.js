// create module
var myApp = angular.module('myModule',[]);
// create controller of module myModule Khai bao tuong minh
// myApp.controller('myController',myController);
//  function myController($scope) {
//      $scope.message= 'AngularJS'
//
//  }
 myApp.controller('myController',function ($scope) {
     $scope.message = "Vu Anh Tu"
 });