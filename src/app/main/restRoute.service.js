'use strict';

angular.module('microStar').factory('MicroStar', function (Restangular) {
  return {
    user: function (user) {
      return user ? Restangular.oneUrl('api/user/' + user) : Restangular.oneUrl('api/user');
    }
  };
});
