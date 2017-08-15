// create module
var myApp = angular.module('myModule',[]);
// create controller of module myModule Khai bao tuong minh
// myApp.controller('myController',myController);
//  function myController($scope) {
//      $scope.message= 'AngularJS'
//
//  }

// scope là một service của Angular để thực hiện cơ chế DataBinding
 myApp.controller('myController',function ($scope) {
     var employee = {
         FirstName : "Mark",
         LastName : "Hasting",
         Gender : "Male"
     }
     $scope.employee = employee;  //$scope.employee là để truyền ra view

 });