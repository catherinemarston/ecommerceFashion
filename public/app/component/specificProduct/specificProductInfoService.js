angular.module('app')
    .service('specificProductSrvc', function($http) {
      //http get call to server side women/:id
      //req.params.id
    //
    this.addToCart = function(product) {
      return $http({
        method: 'POST',
        url: '/cart',
        data: product
      }).then(function(response){
        return response.data;
      })
    },
    });
