'use strict';

angular.module('twoFactorPasswordApp')
  .config(['$stateProvider',function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm',
        resolve: {
          authenticated: function(authService) {
            return authService.isAuthenticated();
          }
        }
      });
  }]);