angular.module('app')
  .controller('flatsCtrl', function($scope, flatsSrvc) {

    $scope.getAllFlats = function() {
      flatsSrvc.getAllFlats()
        .then(function(response) {
          $scope.products = response;
        });
    }
    //front end will just be ng-repeat with "shoes in products"
    // $scope.getAllProducts();

  });
