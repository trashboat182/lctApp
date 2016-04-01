(function() {
  'use strict';

  angular
    .module('lctapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, RestangularProvider,API_ENDPOINT) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        auth:false
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login/login.html',
        controller: 'LoginController',
        auth: true
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/components/login/register/register.html',
        controller: 'RegisterController',
        auth: true
      });

    $urlRouterProvider.otherwise('/');

    // configuration restangular
    RestangularProvider.setBaseUrl(API_ENDPOINT);
    RestangularProvider.setDefaultHeaders({
      'Accept': 'application/json; charset=utf-8',
      'Content-type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    RestangularProvider.setFullResponse(true);
  }

})();
