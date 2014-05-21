(function() {
  'use strict';
  angular.module('pvdGlobal', ['ngStorage']).factory('global', [
    '$localStorage', function($localStorage) {
      $localStorage.global || ($localStorage.global = {});
      return {
        data: $localStorage.global,
        get: function(attr) {
          return this.data[attr];
        },
        set: function(attr, val) {
          return this.data[attr] = val;
        },
        remove: function(attr) {
          return delete this.data[attr];
        },
        pull: function(attr) {
          var val;
          val = this.data[attr];
          delete this.data[attr];
          return val;
        }
      };
    }
  ]);

}).call(this);
