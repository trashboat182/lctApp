'use strict';

angular
    .module('lctapp').factory('Session', function ($sessionStorage) {

    var _storageType = $sessionStorage;

    return {
        get: function (key) {
            return _storageType[key];
        },
        set: function (key, value) {
            _storageType[key] = value;
            return this;
        },
        remove: function (key) {
            delete _storageType[key];
            return this;
        },
        createSession: function (user) {
            this.set('user', user);
        },
        destroySession: function (){
            this.remove('user');
        },
        getUser: function () {
            return this.get('user');
        },
        isAuthenticated: function () {
            return !!this.getUser();
        }
    };
});
