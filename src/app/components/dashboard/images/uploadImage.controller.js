'use strict';

angular
    .module('lctapp')
    .controller('uploadImageController', UploadImageController);

/** @ngInject */
function UploadImageController($scope,Session,Rest,ngDialog,$timeout) {
    console.log('upload image ctrl');
    $scope.image = {
        title: '',
        image: '',
        emision: '',
        campaign: '',
        agency:'',
        announcer: '',
        creativeDirector:'',
        artDirector:'',
        designer: '',
        production:'',
        illustration: '',
        redactor: '',
        responsible: ''
    };

    $scope.emptyObjValueExists = function(){
        return _.some($scope.image, function(value, key, obj){
            return obj[key] === '';
        });
    };

    $scope.showSuccessImageSaved = function(){
        $scope.successImageSaved = ngDialog.open({
            template: 'app/components/dashboard/images/successImageSaved.html',
            className: 'ngdialog-theme-default',
            closeByEscape : false,
            closeByDocument: false,
            showClose: false,
            scope: $scope
        });
    };

    $scope.saveImage = function(){
        if(!$scope.emptyObjValueExists()){
            var user = Session.getUser();
            Rest.registerImage(user.username).customPUT($scope.video).then(function(){
                console.log('file Saved');
                $scope.dashboardImageDialog.close();
                $scope.showSuccessImageSaved();
                $timeout(function(){
                    $scope.successImageSaved.close();
                },1500);

            })
            .catch(function(e){
                console.log('file NOT Saved');
                console.log(e);
            })
        }
    };
}
