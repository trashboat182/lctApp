'use strict';

angular
  .module('lctapp')
  .controller('uploadVideoController', UploadVideoController);

/** @ngInject */
function UploadVideoController($scope,fileUploadService,API_ENDPOINT,Session,Rest,ngDialog,$timeout) {
  console.log('upload video ctrl');
  $scope.video = {
      title: '',
      video: '',
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
  $scope.videoFile = {};

   $scope.emptyObjValueExists = function(){
       return _.some($scope.video, function(value, key, obj){
         return obj[key] === '';
       });
   };

  $scope.showSuccessVideoSaved = function(){
    $scope.successVideoSaved = ngDialog.open({
      template: 'app/components/dashboard/videos/successVideoSaved.html',
      className: 'ngdialog-theme-default',
      closeByEscape : false,
      closeByDocument: false,
      showClose: false,
      scope: $scope
    });
  };

   $scope.saveVideo = function(){

//    var file = $scope.videoFile;
//    var uploadUrl = API_ENDPOINT+'/upload';

//    fileUploadService.uploadFileToUrl(file,uploadUrl).then(function(response){
//      var user = Session.getUser();
//      var fileObj = $scope.video;
//      fileObj.videoFile = JSON.parse(response);
//      console.log('fileObj');
//      console.log(fileObj);
//      Rest.registerImage(user.username).customPUT(fileObj).then(function(){
//        console.log('file Saved');
//      })
//      .catch(function(e){
//        console.log('file NOT Saved');
//        console.log(e);
//      })
//    })
//    .catch(function(e){
//      console.log('uploaded failed');
//      console.log(e);
//    })

      if(!$scope.emptyObjValueExists()){
          var user = Session.getUser();
          Rest.registerVideo(user.username).customPUT($scope.video).then(function(){
              console.log('file Saved');
              $scope.dashboardVideoDialog.close();
              $scope.showSuccessVideoSaved();
              $timeout(function(){
                $scope.successVideoSaved.close();
              },1500);

          })
              .catch(function(e){
                  console.log('file NOT Saved');
                  console.log(e);
              })
      }
  };
}
