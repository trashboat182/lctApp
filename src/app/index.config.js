(function() {
  'use strict';

  angular
    .module('lctapp')
    .config(config);

  /** @ngInject */
  function config(RestangularProvider) {

    console.log('config');
    // configuration restangular
    RestangularProvider.setBaseUrl('xyz');
    RestangularProvider.setDefaultHeaders({
      'Accept': 'application/json; charset=utf-8',
      'Content-type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    RestangularProvider.setFullResponse(true);
  }

})();
