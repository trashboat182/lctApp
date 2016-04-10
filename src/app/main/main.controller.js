'use strict';

  angular
    .module('lctapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$state,brand) {

    $scope.brand=brand;
    $scope.sidebar = {
        status : false
    };
    $scope.uiRouterState = $state;

  }
