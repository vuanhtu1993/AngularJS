var myApp = angular.module('filterDemo',[]);
myApp.controller('filterController',function () {
    var filter = this;
    filter.employees = [
        {name:'John', birthday:new Date('6/6/1993'), salary:'1000',gender:'male'},
        {name:'Jane', birthday:new Date('6/7/1993'), salary:'2000',gender:'female'},
        {name:'Ruby', birthday:new Date('6/8/1993'), salary:'3000',gender:'female'},
        {name:'Shapia', birthday:new Date('6/9/1993'), salary:'6000',gender:'female'},
        {name:'Mark', birthday:new Date('6/10/1993'), salary:'8000',gender:'male'}
    ]
});