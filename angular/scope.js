angular.module('scopeDemo',[])
.controller('ScopeController',function ($scope) {
    $scope.name='Vu Anh Tu';

    $scope.sayHello = function () {
        $scope.name = 'Hello' + $scope.name;
    }
        .controller('')
});