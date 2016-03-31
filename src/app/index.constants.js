/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('lctapp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('brand', 'default App')
    .constant('API_ENDPOINT', 'http://localhost:9000');

})();
