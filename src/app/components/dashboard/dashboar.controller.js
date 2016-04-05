'use strict';

angular
    .module('lctapp')
    .controller('DashboardController', DashboardController);

/** @ngInject */
function DashboardController($scope,brand,ngDialog) {

    console.log('dashboard');

    $scope.showUploadDialog = function(){
      $scope.loginErrorDialog = ngDialog.open({
        template: 'app/components/dashboard/uploadFileDialog.html',
        className: 'ngdialog-theme-default ngdialog-transparent ngdialog-dashboard',
        closeByEscape : true,
        closeByDocument: true,
        showClose: true,
        scope: $scope
      });
    };

}
