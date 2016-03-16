var app = angular.module('todo', ['ui.router', 'angular-storage', 'angular-uuid']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('todo', {
          url: '/',
          abstract: true,
          views: {
              'header': {
                  templateUrl: 'src/partials/header.html'
              },
              'content': {
                  template: '<div ui-view></div>'
              }
          }
      })
      .state('todo.list', {
          url: '',
          views: {
              'content@': {
                  templateUrl: 'src/partials/list.html',
                  controller: 'TodolistController',
                  controllerAs: 'todoList'
              }
          }
      })
      .state('todo.new', {
          url: 'new',
          views: {
              'content@': {
                  templateUrl: 'src/partials/new.html',
                  controller: 'TodolistController',
                  controllerAs: 'todoList'
              }
          }
      })
      .state('todo.details', {
          url: 'todo/:id',
          views: {
              'content@': {
                  templateUrl: 'src/partials/details.html',
                  controller: 'TodolistController',
                  controllerAs: 'todoList'
              }
          }
      });

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');
}]);
