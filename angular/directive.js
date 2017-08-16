var myApp = angular.module('DirectiveDemo',[]);

myApp.controller('directiveController',function ($scope) {

}).directive('welcomeText',function () {
    return {
        //template:'Welcome to my first Angular'
        templateUrl:'customDirective.html'
    }
});