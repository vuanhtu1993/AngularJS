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
    };

    todoList.remaining = function () {
        var count = 0;
        angular.forEach(todoList.todos,function (todo) {
            if(todo.done){}
            else count++;
        });
        return count;
    };
    todoList.archive = function () {
        var oldTodo = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodo,function (todo) {
            if(!todo.done){
                todoList.todos.push(todo);
            }
        })
    }
});