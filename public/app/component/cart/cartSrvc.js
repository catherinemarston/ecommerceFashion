angular.module('app')
  .service('cartSrv', function($http) {

    this.getCart = function() {
      return $http({
        method: 'GET',
        url: '/cart'
      }).then(function(response) {
        return response.data;
      })
    },
    this.addToCart = function() {
      return $http({
        method: 'POST',
        url: '/cart',
        data: Product
      }).then(function(response){
        return response.data;
      })
    }

  });
