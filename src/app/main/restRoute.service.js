'use strict';

angular.module('lctapp').factory('Rest', function (Restangular) {
  return {
    users: function (user) {
      return user ? Restangular.oneUrl('api/users/' + user) : Restangular.oneUrl('api/users');
    }
  };
});
