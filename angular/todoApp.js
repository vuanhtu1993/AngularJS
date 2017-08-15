angular.module('todoApp',[])
.controller('TodoListController',function () {
    var todoList = this;
    todoList.todos = [
        {text:'AngularJS',done:true},
        {text:'JavaScript',done:false}
    ];

    todoList.addTodo = function () {
        todoList.todos.push({text:todoList.todoText, done:false});
        todoList.todoText = '';
    }

})