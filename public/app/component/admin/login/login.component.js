var module = angular.module('app')

function


module.component('adminLogin', {
  template: '<p>hi</p>',
  bindings: { //this is similar to isolate scope

    //input is arbitray // the word "value" will then used on the html like so <movie-rating value = "movie.rating"> -- template
  },
  controllerAs: 'model',
  controller: function() {
    var adminModel = this;

    adminModel.loginLocal
})

adminModel.login = function() {
  auth.login({
    username: adminModel.username,
    password: adminModel.password
  }).then(function(){
    
  })
}
