'use strict';

angular
    .module('lctapp')
    .controller('uploadMusicController', UploadMusicController);

/** @ngInject */
function UploadMusicController($scope,Session,Rest,ngDialog,$timeout) {
    console.log('upload music ctrl');
    $scope.music = {
        title: '',
        music: '',
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
        return _.some($scope.music, function(value, key, obj){
            return obj[key] === '';
        });
    };

    $scope.showSuccessMusicSaved = function(){
        $scope.successMusicSaved = ngDialog.open({
            template: 'app/components/dashboard/music/successMusicSaved.html',
            className: 'ngdialog-theme-default',
            closeByEscape : false,
            closeByDocument: false,
            showClose: false,
            scope: $scope
        });
    };

    $scope.saveMusic = function(){
        if(!$scope.emptyObjValueExists()){
            var user = Session.getUser();
            Rest.registerMusic(user.username).customPUT($scope.music).then(function(){
                console.log('file Saved');
                $scope.dashboardMusicDialog.close();
                $scope.showSuccessMusicSaved();
                $timeout(function(){
                    $scope.successMusicSaved.close();
                },1500);

            })
                .catch(function(e){
                    console.log('file NOT Saved');
                    console.log(e);
                })
        }
    };
}
