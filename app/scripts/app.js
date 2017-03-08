'use strict';

var app = angular.module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.router',
]);

// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'views/main.html',
//       controller: 'MainCtrl'
//     })
//     .when('/about', {
//       templateUrl: 'views/about.html',
//       controller: 'AboutCtrl'
//     })
//     .when('/contact', {
//       templateUrl: 'views/contact.html'
//     })
//     .otherwise({
//       redirectTo: '/home'
//     });
// }]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {
        url: '/home', // When the state is active, the browser’s url will be /home.
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('about.version', {
        url: '/version',
        template: '0.0.1'
      })
      .state('about.author', {
        url: '/author',
        template: 'Guobin'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      ;

    $urlRouterProvider.otherwise('/home');

}]);
