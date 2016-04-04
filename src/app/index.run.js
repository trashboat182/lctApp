'use strict';

  angular
    .module('lctapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, Session) {

    $log.debug('runBlock end');

    // Handle Authenticated States
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            if (toState.auth && !Session.isAuthenticated()) {
            event.preventDefault();
            $state.transitionTo('home', { message: 'Must authenticate before navigating to this page', redirectState: toState, redirectParams: toParams});
        }
    });
  }
