angular.module('app')
  .controller('cartsCtrl', function($scope, cartsSrvc) {


  }

var module = angular.module('app');

// function getCart($http) {
//   return $http.get('/cart')
//   .then(function(response){
//     return response.data;
//   });
// } //acting as the service here

function getCartcontroller($http) {
  var model = this;
  //
  model.$onInit = function() {
    getCart($http).then(function(products){
      model.productsInCart = products;
    })
  };
  model.addQuantity = function(product) {
    model.quantity += 1;
  };
  model.decreaseQuantity = function(product) {
    if(model.quantity > 1) {
      model.quantity -= 1;
    }
  };
}





module.component('getCartComponent'{
  controllerAs: 'model',
  controller: getCartcontroller,
  templateUrl: './cart/cart.html',
  // require: {
  //    'parent': '^addProductComponent'
  //  }, --- i don't know if we need the parent component here!
})
