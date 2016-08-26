angular.module('app')
  .controller('specificProductCtrl', function($scope, specificProductSrvc) {

    $scope.addToCart = function(product) {
      console.log(product);
        var selectedProduct = {
          productId: Products.product_id
        };
      specificProductSrvc.addToCart(selectedProduct) {
        console.log(selectedProduct);
        .then(function(response){
          $scope.cart = response;
        });
      };
    }
    //front end will just be ng-repeat with "shoes in products"
    // $scope.getAllProducts();

  });
// angular.module('app').component('specificProduct', {
//   // templateUrl: './products.html'
//   templateUrl: './specificProduct/productInfo.html',
// })

//$ctrl is how to alias the component
//angular will just custom html element <all-products></all-products>
//make sure to add this into your products.html unless you figure out webpack
