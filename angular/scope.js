var myApp = angular.module('scopeDemo',[]);

myApp.controller('classController',function ($scope,$rootScope) {

    $rootScope.name = 'Javescript';
});
myApp.controller('schoolController',function ($scope) {

});

