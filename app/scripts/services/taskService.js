'use strict';

angular.module('mytodoApp')
  .factory('taskService', function($http, $q) {
    return {
      getTodos: function(){
        //  var deferred = $q.defer();
        // // $http({
        // //   method: 'GET',
        // //   url: 'http://localhost:3001/api/v1/tasks/'
        // // })
        // $http.get('http://localhost:3001/api/v1/tasks/').then(
        //   function successCallback(response) {
        //     deferred.resolve(response.data);
        //     // var tasks = [];
        //     // for(var i = 0; i < response.data.length; i++) {
        //     //   tasks.push(response.data[i].task); 
        //     // }
        //     // deferred.resolve(tasks);
        //   },
        //   function errorCallback(response) {
        //     deferred.reject(response.data);
        //   }
        // );
        // return deferred.promise;
        return $http.get('http://localhost:3001/api/v1/tasks/');
      },

      addTodo: function(todo){
        //submit form data
        // var data = 'task[task]=' + todo;
        // var conf = {
        //   headers : {
        //     'Content-Type' : 'application/x-www-form-urlencoded'
        //   }
        // };
        // return $http.post('http://localhost:3001/api/v1/tasks', data, conf);

        //submit json data
        //task[task]=XXX
        var data = angular.toJson({task: {task: todo}});
        return $http.post('http://localhost:3001/api/v1/tasks/', data);
      },

      removeTodo: function(id){
        return $http.delete('http://localhost:3001/api/v1/tasks/' + id);
      }
    }
  });