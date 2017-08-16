var myApp = angular.module('eventDemo',[]);
myApp.controller('eventController',function () {
    var handleEvent = this;
    handleEvent.technologies =[
        {name:'C#', like: 0, dislike: 0},
        {name:'JavaScript', like: 0, dislike: 0},
        {name:'AngularJS', like: 0, dislike: 0},
        {name:'PHP', like: 0, dislike: 0}
    ];
    handleEvent.increaseLike= function (technology) {
        technology.like++;

    };
    handleEvent.increaseDislike = function (technology) {
        technology.dislike++;

    }
});