'use strict';

angular
    .module('lctapp')
    .controller('RegisterController', RegisterController);

/** @ngInject */
function RegisterController($scope, Rest, $state, Session, ngDialog) {

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

    $scope.error = {
        title: '',
        message:''
    };

    $scope.register = function(){
        if($scope.user.username && $scope.user.email && $scope.user.password && $scope.confirmPassword){
            if($scope.user.password !== $scope.confirmPassword){
                $scope.error.tittle = 'Passwords do not match';
                $scope.showRegisterErrorDialog();
                return;
            }
            Rest.users().customPOST($scope.user).then(function(response) {
                var data = response.data;
                if(data){
                    Session.createSession({
                        username:$scope.user.username,
                        password:$scope.user.password,
                        email: $scope.user.email,
                        emailAuth:false
                    });
                    $state.go('agencyForm');
                }
            })
            .catch(function(e){
                    $scope.error.tittle = 'User Not Created';
                    $scope.showRegisterErrorDialog();
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
            return Rest.users($scope.user.username).customPUT($scope.user).then(function(response) {
                var data = response.data;
                if(data){
                    return true;
                }
            })
            .catch(function(e){
                $scope.error.tittle = 'Information could not be updated for user: '+$scope.user.username;
                $scope.showRegisterErrorDialog();
                return false;
            })
        }
        else{
            $scope.error.tittle = 'You must create an account first.';
            $scope.showRegisterErrorDialog();
            return false;
        }
    };

    $scope.updateAgencyForm = function(){
        if($scope.saveUserDetails()){
            $state.go('contactForm');
        }
    };

    $scope.updateContactDataForm = function(){
        if($scope.saveUserDetails()){
            $state.go('dashboard');
        }
    };

    $scope.showRegisterErrorDialog = function(){
        $scope.registerErrorDialog = ngDialog.open({
            template: 'app/components/login/register/registerError.html',
            className: 'ngdialog-theme-default',
            closeByEscape : true,
            closeByDocument: true,
            showClose: true,
            scope: $scope
        });
    };

    $scope.closeRegisterErrorDialog = function(){
        $scope.registerErrorDialog.close();
    };
}
