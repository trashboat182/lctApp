'use strict';

angular
    .module('lctapp')
    .controller('DashboardController', DashboardController);

/** @ngInject */
function DashboardController($scope,brand) {
    console.log('dashboard');
}
