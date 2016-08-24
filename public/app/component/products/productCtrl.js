angular.module('app')
  .controller('productsCtrl', function($scope, productSrvc) {

    $scope.getAllProducts = function() {
      productSrvc.getAllProducts()
        .then(function(response) {
          $scope.products = response;
        });
    }
    //front end will just be ng-repeat with "shoes in products"
    // $scope.getAllProducts();

  });
