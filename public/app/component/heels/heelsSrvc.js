angular.module('app')
  .service('heelsSrvc', function($http) {

    this.getAllHeels = function() {
      return $http({
        method: 'GET',
        url: '/womens/heels'
      }).then(function(response) {
        return response.data;
      })
    }

  });
