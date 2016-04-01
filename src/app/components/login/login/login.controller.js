'use strict';

angular
    .module('lctapp')
    .controller('LoginController', LoginController);

/** @ngInject */
function LoginController($scope, Rest) {

    console.log('Login Controller');
    $scope.login = {
      username:'',
      password:''
    };

    $scope.signin = function(){
      if($scope.login.username && $scope.login.password){
        Rest.users($scope.login.username).get().then(function(response) {
            var user = response.data;
            if(user){
                if($scope.login.password===user.password){
                    console.log('User Logged!!');
                }
                else{
                    console.log('Incorrect password');
                }
            }
            else{
                console.log('User not found!');
            }
        });
      }
    };
}
