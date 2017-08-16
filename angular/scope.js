var myApp = angular.module('scopeDemo',[]);

myApp.controller('classController',function ($scope) {
    $scope.name = 'JavaSciprt';
});
myApp.controller('schoolController',function ($scope) {
    $scope.name = 'Angular';
});

