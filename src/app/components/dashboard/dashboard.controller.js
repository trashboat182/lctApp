'use strict';

angular
    .module('lctapp')
    .controller('DashboardController', DashboardController);

/** @ngInject */
function DashboardController($scope,brand,ngDialog) {

    console.log('dashboard');

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
        template: 'app/components/dashboard/uploadImageDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope
      });
    };

    $scope.showUploadVideo = function(){
      $scope.dashboardVideoDialog = ngDialog.open({
        template: 'app/components/dashboard/uploadVideoDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope
      });
    };

    $scope.showUploadMusik = function(){
      $scope.dashboardMusikDialog = ngDialog.open({
        template: 'app/components/dashboard/uploadMusikDialog.html',
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
