pvdGlobal
=========

Global Angular object to prevent pollution of $rootScope

Implementation:
```javascript
angular
  .module('myApplication',['pvdGlobal'])
  .config(['pvdGlobalProvider', function(pvdGlobalProvider){
    pvdGlobalProvider.config({
      debug: true,
      foo: 'bar',
      sky: 'blue'
    });
  }])
  .controller('myController',['global',function(global){
    // debug mode?
    if(global.get('debug')){
      alert("we be debuggin' yo!")
    }
    // weather change
    function makeCloudy(){
      global.set('sky','gray');
    }
  }]);
```