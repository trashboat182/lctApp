(function() {
  'use strict';

  angular
    .module('lctapp')
    .config(config);

  /** @ngInject */
  function config(RestangularProvider, API_ENDPOINT) {

    console.log('config');
    // configuration restangular
    RestangularProvider.setBaseUrl(API_ENDPOINT);
    RestangularProvider.setDefaultHeaders({
      'Accept': 'application/json; charset=utf-8',
      'Content-type': 'application/json; charset=utf-8'
    });
    RestangularProvider.setFullResponse(true);
  }

})();
