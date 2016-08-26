angular.module('app')
    .service('productSrvc', function($http) {

        this.getAllProducts = function() {
            return $http({
                method: 'GET',
                url: '/womens'
            }).then(function(response) {
                return response.data;
            })
        },
        this.getSpecificProduct = function(id) {
          return $http({
            method: 'GET',
            url: '/womens/ + id'
          }).then(function(response){
            console.log(response);
            return response.data;
          })
        },
    });
