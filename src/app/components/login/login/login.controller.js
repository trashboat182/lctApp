'use strict';

angular
    .module('lctapp')
    .controller('LoginController', LoginController);

/** @ngInject */
function LoginController($scope) {
    $scope.login = {
      email:'',
      password:''
    };

    console.log('Login Controller');
    $scope.signin = function(){
      console.log($scope.login.email);
      console.log($scope.login.password);
    };
}
