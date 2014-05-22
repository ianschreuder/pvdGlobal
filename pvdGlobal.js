
/*

  --------------------------------------------
  Global object module
  --------------------------------------------

  Provides global shared object with configuration
  to prevent pollution of $scope
 */

(function() {
  'use strict';
  angular.module('pvdGlobal', ['ngStorage']).provider('pvdGlobal', function() {
    var _config;
    _config = {};
    return {
      config: function(config) {
        if (config == null) {
          config = {};
        }
        return angular.extend(_config, config);
      },
      $get: function() {
        return {
          config: function() {
            return _config;
          }
        };
      }
    };
  }).factory('global', [
    '$localStorage', 'pvdGlobal', function($localStorage, pvdGobal) {
      $localStorage.global || ($localStorage.global = angular.extend({}, pvdGlobal.config()));
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
