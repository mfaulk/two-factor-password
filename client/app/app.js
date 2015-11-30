'use strict';

angular.module('twoFactorPasswordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'angular-storage',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

  });