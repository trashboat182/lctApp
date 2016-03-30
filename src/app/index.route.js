(function() {
  'use strict';

  angular
    .module('lctapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        auth:false
      })
      .state('login', {
        url: "/login",
        templateUrl: "app/components/login/login/login.html",
        controller: 'LoginController',
        auth: true
      });

    $urlRouterProvider.otherwise('/');
  }

})();
