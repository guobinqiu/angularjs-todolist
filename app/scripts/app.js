'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule' //https://github.com/grevory/angular-local-storage
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        // controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
        // controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
       localStorageServiceProvider.setPrefix('ls');
   }])
  // .config(function($httpProvider){
  //   $httpProvider.defaults.useXDomain=true;
  //   delete $httpProvider.defaults.headers.common['X-Requested-With'];
  // })
  ;
