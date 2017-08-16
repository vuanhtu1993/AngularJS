var myApp = angular.module('repeatDemo',[]);

myApp.controller('repeatController',function ($scope) {
    var employees = [
        {firstName:'Ben', lastName:'Masting', gender:'Male',salary:'1000'},
        {firstName:'Sara', lastName:'Masting', gender:'Female',salary:'1000'},
        {firstName:'Mark', lastName:'Masting', gender:'Male',salary:'1000'},
        {firstName:'Pam', lastName:'Masting', gender:'Male',salary:'1000'}
        ];
    $scope.employees = employees; //employee mà $scope.employee để show ra màn hình, được gán bằng employee phía trên

});


myApp.controller('nestedRepeatController',function () {
    var show_country = this;
     show_country.countries = [
        {
            name:'UK',
            city:[
                {name:'London'},
                {name:'Chesea'},
                {name:'ManU'}
            ]
        },
        {
            name:'US',
            city:[
                {name:'NewYork'},
                {name:'Cam'},
                {name:'Wasington'}
            ]
        },
        {
            name:'VN',
            city:[
                {name:'HN'},
                {name:'HCM'},
                {name:'DaNang'}
            ]
        }
    ];

});