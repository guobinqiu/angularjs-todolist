'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function($scope, localStorageService, taskService, $http, $resource) {
    // $scope.todos = [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3'
    // ];

 //    var todosInStore = localStorageService.get('todos');
	// $scope.todos = todosInStore && todosInStore.split('\n') || [];
	// $scope.$watch('todos', function () {
 //   		localStorageService.add('todos', $scope.todos.join('\n'));
	// }, true);

    $scope.todos = [];
    // $http({
    //   method: 'GET',
    //   url: 'http://localhost:3001/api/v1/tasks'
    // }).then(function(response){
    //   for(var i = 0; i < response.data.length; i++) {
    //     $scope.todos.push(response.data[i].task); 
    //   }
    // }, function(response){
    //   alert(response);
    // });

    // taskService.getTodos().then(function(data){
    //     $scope.todos = data;
    // });

    // taskService.getTodos().then(function(response){
    //     $scope.todos = response.data;
    // });

    var Task = $resource('http://localhost:3001/api/v1/tasks/:taskId', {taskId: '@id'});
    Task.query(function(data){
       $scope.todos = data;
    });

    $scope.addTodo = function() {
    	//$scope.todos.push($scope.todo);
        taskService.addTodo($scope.todo).then(function(){
            taskService.getTodos().then(function(response){
                $scope.todos = response.data;
            });
        });
    	$scope.todo = '';
    };
    
    $scope.removeTodo = function(index) {
    	//$scope.todos.splice(index, 1);
        taskService.removeTodo(index).then(function(){
            taskService.getTodos().then(function(response){
                $scope.todos = response.data;
            });
        });
    }
  });
