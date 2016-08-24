angular.module('app')
    .service('productSrvc', function($http) {

        this.getAllProducts = function() {
            return $http({
                method: 'GET',
                url: '/womens'
            }).then(function(response) {
                return response.data;
            })
        }
    });
