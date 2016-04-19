'use strict';
//global window, Blob, FileReader

angular.module('lctapp').service('fileUploadService',function ($q) {
    this.uploadFileToUrl = function(modelFile, uploadUrl){
        //HTTP
        /*var deferred = $q.defer();
         var fd = new FormData();
         fd.append('file', file);
         $http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
         })
         .success(deferred.resolve)
         .error(deferred.resolve);
         return deferred.promise;*/

        var deferred = $q.defer();
        //XHR
        var fd = new FormData();
        fd.append('file', modelFile);
        var xhr = new XMLHttpRequest();
        xhr.file = modelFile; // not necessary if you create scopes like this
        xhr.addEventListener('progress', function() {
            //var done = e.loaded || e.loaded, total = e.total || e.total;
            //console.log('xhr progress: ' + (Math.floor(done/total*1000)/10) + '%');
        }, false);
        if ( xhr.upload ) {
            xhr.upload.onprogress = function(e) {
                var done = e.loaded|| e.loaded, total = e.total || e.total;
                //addLogs('uploading file : ' + done + ' bytes of ' + total + ' bytes = ' + (Math.floor(done/total*1000)/10) + '%');
            };
        }
        xhr.onreadystatechange = function() {
            if ( 4 === this.readyState ) {
                console.log(['xhr upload complete', e]);
            }
        };
        xhr.open('post', uploadUrl, true);

        xhr.onreadystatechange = function(){
            if ( xhr.readyState === 4 ) {
                if ( xhr.status === 200 ) {
                    deferred.resolve(xhr.responseText);
                }
            }
        };
        xhr.onerror = function (e) {
            deferred.reject(e.type);
        };
        xhr.send(fd);
        return deferred.promise;
    };
});


