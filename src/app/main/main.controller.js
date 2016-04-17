'use strict';

  angular
    .module('lctapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$state,brand,Session,fileUploadService,API_ENDPOINT,Rest) {

    $scope.uiRouterState = $state;
    $scope.brand=brand;
    $scope.sidebar = {
        status : false
    };

    $scope.initialize = function(){
        $scope.checkLeftSidebar(window.innerWidth);
    };

    $scope.checkLeftSidebar = function(width){
        if(width>767){
            $scope.sidebar.status = true;
        }
    };

    $(window).on("resize.doResize", function (){
        $scope.$apply(function(){
           $scope.checkLeftSidebar(window.innerWidth);
        });
    });

    $scope.closeSession = function(){
        Session.destroySession();
        $state.go('home');
    };

    $scope.file = {
      value:''
    };

      $scope.sendFile = function(){
          console.log($scope.file.value);
          var file = $scope.file.value;
          var uploadUrl = API_ENDPOINT+'/upload'
          fileUploadService.uploadFileToUrl(file,uploadUrl).then(function(){
             console.log('uploaded succesfully');
              var user = Session.getUser();
              var file = {
                  name: 'firstFile'
              };
              Rest.registerImage(user.username).customPUT(file).then(function(){
                  console.log('file Saved');
              })
              .catch(function(e){
                      console.log('file NOT Saved');
                      console.log(e);
              })
          })
          .catch(function(){
              console.log('uploaded failed');
          })
      };

    $scope.initialize();
  }
