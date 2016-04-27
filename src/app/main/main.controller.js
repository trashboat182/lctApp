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

    /** DELETE this, when debug by console is no longer needed*/
    $scope.println = function(element){
      console.log(JSON.stringify(element,null,4));
    };

    $scope.initialize();
  }
