'use strict';

app.controller('MainCtrl', ['$scope', '$resource', 'taskService', function($scope, $resource, taskService) {

    // taskService.getTodoList().then(function(response) {
    //     $scope.todoList = response.data;
    // });

    // $scope.addTodo = function() {
    //     taskService.addTodo($scope.todo).then(function() {
    //         taskService.getTodoList().then(function(response) {
    //             $scope.todoList = response.data;
    //         });
    //     });
    // 	$scope.todo = '';
    // };
    
    // $scope.removeTodo = function(todo) {
    //     taskService.removeTodo(todo).then(function() {
    //         taskService.getTodoList().then(function(response) {
    //             $scope.todoList = response.data;
    //         });
    //     });
    // }


    // https://docs.angularjs.org/api/ngResource/service/$resource

    taskService.query(function(data) {
       $scope.todoList = data;
    });
    
    $scope.addTodo = function() {
        taskService.save({}, { task: { task: $scope.todo } }, function(data) {
            taskService.query(function(data) {
                $scope.todoList = data;
            });
        });
    };
   
    // $scope.addTodo = function() {
    //     var task = new taskService();
    //     task.task = { task: $scope.todo };
    //     task.$save();
    // };

    $scope.removeTodo = function(todo) {
        taskService.delete({}, { id: todo._id }, function(data) {
            taskService.query(function(data) {
                $scope.todoList = data;
            });
        });
    };

}]);
