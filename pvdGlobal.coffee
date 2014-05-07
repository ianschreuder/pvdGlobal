'use strict'

angular

  .module('pvdGlobal',['ngStorage'])

  .factory('global',['$localStorage',($localStorage) ->
    #
    # Init global object
    $localStorage.global ||= {}
    #
    # Cache
    cache: $localStorage.global
    #
    # Getter
    get: (attr) ->
      @cache[attr]
    #
    # Setter
    set: (attr,val) ->
      @cache[attr] = val
    #
    # Delete attr
    remove: (attr) ->
      delete @cache[attr]
    #
    # Get & delete from cache
    pull: (attr) ->
      val = @cache[attr]
      delete @cache[attr]
      val
  ])
