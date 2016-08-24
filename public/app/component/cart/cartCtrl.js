angular.module('app')
  .controller('cartsCtrl', function($scope, cartsSrvc) {


  }

var module = angular.module('app');

function getCart($http) {
  return $http.get('/cart')
  .then(function(response){
    return response.data;
  });
} //acting as the service here

function getCartcontroller($http) {
  var model = this;
  //
  model.$onInit = function() {
    getCart($http).then(function(products){
      model.productsInCart = products;
    })
  }
}





module.component('cartComponent'{
  controllerAs: 'model',
  controller: getCartcontroller,
  templateUrl: './cart/cart.html',
})
