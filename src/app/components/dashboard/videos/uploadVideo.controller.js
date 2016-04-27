'use strict';

angular
  .module('lctapp')
  .controller('uploadVideoController', UploadVideoController);

/** @ngInject */
function UploadVideoController($scope,fileUploadService,API_ENDPOINT,Session,Rest) {
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
          Rest.registerImage(user.username).customPUT($scope.video).then(function(){
              console.log('file Saved');
          })
              .catch(function(e){
                  console.log('file NOT Saved');
                  console.log(e);
              })
      }
  };
}
