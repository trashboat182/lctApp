'use strict';

  angular
    .module('lctapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,brand) {
    $scope.brand=brand;

  }
