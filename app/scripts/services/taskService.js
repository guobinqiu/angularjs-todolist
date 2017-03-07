'use strict';

app.factory('taskService', ['$http', '$resource', function($http, $resource) {
    
    // return {

    //     getTodoList: function() {
    //         return $http.get('http://localhost:3001/api/v1/tasks/');
    //     },

    //     addTodo: function(todo) {
    //         var data = angular.toJson({task: {task: todo}});
    //         return $http.post('http://localhost:3001/api/v1/tasks/', data);
    //     },

    //     removeTodo: function(todo) {
    //         return $http.delete('http://localhost:3001/api/v1/tasks/' + todo._id);
    //     },
    // }

    // restful way
    return $resource('http://localhost:3001/api/v1/tasks/:id', {id: '@id'});

}]);