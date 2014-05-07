(function() {
  'use strict';
  angular.module('pvdGlobal', ['ngStorage']).factory('global', [
    '$localStorage', function($localStorage) {
      $localStorage.global || ($localStorage.global = {});
      return {
        cache: $localStorage.global,
        get: function(attr) {
          return this.cache[attr];
        },
        set: function(attr, val) {
          return this.cache[attr] = val;
        },
        remove: function(attr) {
          return delete this.cache[attr];
        },
        pull: function(attr) {
          var val;
          val = this.cache[attr];
          delete this.cache[attr];
          return val;
        }
      };
    }
  ]);

}).call(this);
