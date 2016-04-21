'use strict';

angular.module('lctapp').directive('fileUpload', function() {
  return {
    restrict: 'AEC',
    replace: true,
    transclude: true,
    scope: {
      ngModel:'=',
      fileType:'@',
      placeholder: '@'
    },
    templateUrl: 'app/components/directives/file-upload/fileUpload.html',
    link: function(scope, $element) {
      var button, fileField, proxy;
      fileField = $element.find('[type="file"]').on('change', function() {
        //proxy.val(angular.element(this).val()); //full name
        //proxy.val(angular.element(this)[0].files[0].name);
        proxy.val(angular.element(this).val()); //full name
        scope.ngModel = angular.element(this)[0].files[0] ? angular.element(this)[0].files[0]:'';
        scope.$apply();
      });

      proxy = $element.find('[type="text"]').on('click', function() {
        //fileField.trigger('click');
      });

      button = $element.find('[type="button"]').on('click', function() {
        fileField.trigger('click');
      });
    }
  };
});
