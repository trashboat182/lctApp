'use strict';

angular
    .module('lctapp')
    .controller('RegisterController', RegisterController);

/** @ngInject */
function RegisterController($scope, Rest, $state, Session) {

    console.log('Register Controller');
    $scope.user = {
        username:'',
        email: '',
        password:'',
        userAuth: false,
        emailAuth : false,
        company : '',
        companyDescription : '',
        managerName : '',
        category: '',
        office: '',
        address: '',
        telephone: '',
        fax: '',
        emailSecundary: '',
        webpage: '',
        facebookAccount: '',
        otherAccount: ''
    };

    $scope.confirmPassword ='';

    $scope.register = function(){
        if($scope.user.username && $scope.user.email && $scope.user.password){
            Rest.users().customPOST($scope.user).then(function(response) {
                var data = response.data;
                if(data){
                    Session.createSession({
                        username:$scope.user.username,
                        password:$scope.user.password,
                        email: $scope.user.email,
                        emailAuth:false
                    });
                    console.log('User created!');
                    $state.go('agencyForm');
                }
            })
            .catch(function(e){
                console.log('User Not created ');
                console.log(e);
            })
        }
    };

    $scope.saveUserDetails = function(){
        var localUser = Session.get('user');
        if(localUser){
            $scope.user.username= localUser.username;
            $scope.user.password= localUser.password;
            $scope.user.email= localUser.email;
            $scope.user.emailAuth= localUser.emailAuth;
            console.log('user: '+ $scope.user.username);
            Rest.users($scope.user.username).customPUT($scope.user).then(function(response) {
                var data = response.data;
                if(data){
                    console.log('User updated 1!');
                    $state.go('contactForm');
                }
            })
                .catch(function(e){
                    console.log('User Not Updated 1 ');
                    console.log(e);
                })
        }
    };
}
