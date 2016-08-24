angular.module('app')
.service('adminService', function($http) {
  this.loginLocal = function(credentials) {
    return $http({
      method: 'POST',
      url: '/admin',
      data: credentials
    })
    .then(function(res) {
      return res.data;
    })
    .catch(function(err) {
      console.log('ERROR LOGGING IN!', err);
    })
  }
