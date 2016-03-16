"use strict";

var app = angular.module('app', ['ng', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('feed', {
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
      .state('feed.list', {
          url: '',
          views: {
              'content@': {
                  templateUrl: 'src/partials/list.html',
                  controller: 'FeedListController',
                  controllerAs: 'feedList'
              }
          }
      });

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');
}]);
