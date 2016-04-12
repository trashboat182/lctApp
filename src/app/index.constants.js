/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('lctapp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('brand', 'defaultApp')
    .constant('API_ENDPOINT', 'http://10.100.1.135:9000/');
    //.constant('API_ENDPOINT', 'http://192.168.1.2:9000/');
    //.constant('API_ENDPOINT', 'http://ee29a555.ngrok.io');

})();
