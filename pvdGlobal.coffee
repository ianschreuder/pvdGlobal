###

  --------------------------------------------
  Global object module
  --------------------------------------------

  Provides global shared object with configuration
  to prevent pollution of $scope

###

'use strict'

angular

  #
  # Module Definition
  #
  .module('pvdGlobal',['ngStorage'])

  #
  # Module Provider
  #
  .provider('pvdGlobal', ->

    _config = {}

    config: (config={}) ->
      angular.extend(_config,config)
    $get: ->
      config: ->
        _config
  )

  #
  # Module Service
  #
  .factory('global',['$localStorage','pvdGlobal',($localStorage,pvdGlobal) ->
    #
    # Init global object
    $localStorage.global ||= angular.extend({},pvdGlobal.config())
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
