var myApp = angular.module('DirectiveDemo',[]);

myApp.controller('directiveController',function () {
    
}).directive('welcomeText',function () {
    return {
        template:'Welcome to my first Angular'
    }
});