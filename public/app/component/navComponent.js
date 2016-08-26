(function(){
  'use strict';
  var module = angular.module('app');

  app.component('navBar', {
    bindings: {
      title: '<'
    },
    templateUrl: './navComponent.html',
    controller: function() {
      this.menu = [{
        name: ''
      }]
    }
  })
})
