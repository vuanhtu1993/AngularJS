var myApp = angular.module('filterDemo',[]);
myApp.controller('filterController',function () {
    var filter = this;
    filter.employees = [
        {name:'John', birthday:new Date('6/6/1993'), salary:'1000',gender:'male',status:true},
        {name:'Jane', birthday:new Date('6/7/1993'), salary:'2000',gender:'female',status:false},
        {name:'Ruby', birthday:new Date('6/8/1993'), salary:'3000',gender:'female',status:true},
        {name:'Shapia', birthday:new Date('6/9/1993'), salary:'6000',gender:'female',status:true},
        {name:'Mark', birthday:new Date('6/10/1993'), salary:'8000',gender:'male',status:false},
        {name:'May', birthday:new Date('5/10/1993'), salary:'8000',gender:'female',status: true}
    ];
    filter.hide = false;
    filter.search = "";
    filter.reverse = false;
    filter.softColumn = 'name';
    filter.softData=function (column) {
        if(filter.softColumn == column){
            filter.reverse = !filter.reverse;
        }
        else filter.reverse = false;
        filter.softColumn = column;
    };
    filter.view = "filter_view.html";
});
myApp.filter('status',function () {
    return function (input) {
        if(input == true)
            return 'available';
        else return'unavailable';
    }
});