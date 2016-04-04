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
        auth: false
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/components/login/register/register.html',
        controller: 'RegisterController',
        auth: false
      })
      .state('agencyForm', {
        url: '/agencyform',
        templateUrl: 'app/components/login/register/agencyForm.html',
        controller: 'RegisterController',
        auth: true
      })
      .state('contactForm', {
        url: '/contactform',
        templateUrl: 'app/components/login/register/contactDataForm.html',
        controller: 'RegisterController',
        auth: true
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/dashboard.html',
        controller: 'DashboardController',
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
