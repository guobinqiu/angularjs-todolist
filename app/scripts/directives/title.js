'use strict';

//https://docs.angularjs.org/guide/directive

app.directive('title', function() {

  //单向绑定
  // return {
  //   restrict: 'E',
  //   replace: false,
  //   scope: {
  //     name: '@',
  //     color: '@'
  //   },
  //   template: '<h1 style="color: {{ color }}">{{ name | lowercase | capitalize }}</h1>'
  // };

  //双向绑定
  return {
    restrict: 'E',
    replace: true,
    scope: {
      name: '=',
      color: '='
    },
    template: '<h1 style="color: {{ color }}">{{ name | lowercase | capitalize }}</h1>'
  };

});