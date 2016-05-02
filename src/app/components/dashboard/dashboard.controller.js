'use strict';

angular
    .module('lctapp')
    .controller('DashboardController', DashboardController);

/** @ngInject */
function DashboardController($scope,ngDialog) {

    $scope.toggleSidebar = function(){
       $scope.sidebar.status = !$scope.sidebar.status;
    };

    $scope.showUploadDialog = function(){
      $scope.dashboardOptionsDialog = ngDialog.open({
        template: 'app/components/dashboard/uploadFileDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope
      });
    };

    $scope.showUploadImage = function(){
      $scope.dashboardImageDialog = ngDialog.open({
        template: 'app/components/dashboard/images/uploadImageDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope,
        controller: 'uploadImageController'
      });
    };

    $scope.showUploadVideo = function(){
      $scope.dashboardVideoDialog = ngDialog.open({
        template: 'app/components/dashboard/videos/uploadVideoDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        //overlay: false,
        controller: 'uploadVideoController',
        scope: $scope
      });
    };

    $scope.showUploadMusik = function(){
      $scope.dashboardMusicDialog = ngDialog.open({
        template: 'app/components/dashboard/music/uploadMusicDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope
      });
    };

    $scope.closeUploadDialog = function(){
      $scope.dashboardOptionsDialog.close();
    };

    $scope.uploadImages =function(){
      $scope.closeUploadDialog();
      $scope.showUploadImage();
    };

    $scope.uploadVideo =function(){
      $scope.closeUploadDialog();
      $scope.showUploadVideo();
    };

    $scope.uploadMusik =function(){
      $scope.closeUploadDialog();
      $scope.showUploadMusik();
    };
}
