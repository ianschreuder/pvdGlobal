'use strict'

angular

  .module('pvdGlobal',['ngStorage'])

  .factory('global',['$localStorage',($localStorage) ->
    #
    # Init global object
    $localStorage.global ||= {}
    #
    # Cache
    data: $localStorage.global
    #
    # Getter
    get: (attr) ->
      @data[attr]
    #
    # Setter
    set: (attr,val) ->
      @data[attr] = val
    #
    # Delete attr
    remove: (attr) ->
      delete @data[attr]
    #
    # Get & delete from cache
    pull: (attr) ->
      val = @data[attr]
      delete @data[attr]
      val
  ])
