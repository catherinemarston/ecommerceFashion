angular.module('app')
  .service('cartService', function($http) {

    this.getCart = function() {
      return $http({
        method: 'GET',
        url: '/cart'
      }).then(function(response) {
        return response.data;
      })
    },
    // this.addToCart = function(product) {
    //   return $http({
    //     method: 'POST',
    //     url: '/cart',
    //     data: product
    //   }).then(function(response){
    //     return response.data;
    //   })
    // }

  });
