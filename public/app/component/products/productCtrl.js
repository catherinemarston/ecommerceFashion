angular.module('app')
  .controller('productsCtrl', function($scope, productSrvc, $stateParams) {

    $scope.getAllProducts = function() {
      productSrvc.getAllProducts()
        .then(function(response) {
          $scope.products = response;
        });
    },
    var id = $stateParams.id; //most important part! 

    productSrvc.getSpecificProduct(id).then(function(response){
      $scope.specificProduct = response[0]; //speicifc product will be in html
      console.log($scope.specificProduct);
    })
    //front end will just be ng-repeat with "shoes in products"
    // $scope.getAllProducts();

  });

  //COMPONENET MODULE BELOW
// angular.module('app').component('allProducts',{
//   // templateUrl: './products.html'
//   template: "Hello from the other side!",
//   controllerAs: 'model', //controller instance will be in the instance as model rather than $ctrl //now on html we will use model
//   controller: function() {
//     this.message = "hello from a component controller";
//     //shouldn't always use this
//     var model = this;
//
//     model.getSpecificShoe = function() {
//       model.message = "new message";
//     };
//   }
// })

//$ctrl is how to alias the component
//angular will just custom html element <all-products></all-products>
//make sure to add this into your products.html unless you figure out webpack
