'use strict';

angular
    .module('lctapp')
    .controller('RegisterController', RegisterController);

/** @ngInject */
function RegisterController($scope, Rest) {

    console.log('Register Controller');
    $scope.user = {
        username:'',
        email: '',
        password:''
    };

    $scope.confirmPassword ='';

    $scope.register = function(){
        if($scope.user.username && $scope.user.email && $scope.user.password){
            Rest.users().customPOST($scope.user).then(function(response) {
                var data = response.data;
                if(data){
                    console.log('User:');
                    console.log(data);
                    console.log('User created!');
                }
                else{
                    console.log('User not found!');
                }
            });
        }
    };
}
