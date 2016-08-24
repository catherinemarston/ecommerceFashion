angular.module('app')
  .controller('heelsCtrl', function($scope, heelsSrvc) {

    $scope.getAllHeels = function() {
      heelsSrvc.getAllHeels()
        .then(function(response) {
          $scope.products = response;
        });
    }
    //front end will just be ng-repeat with "shoes in products"
    // $scope.getAllProducts();

  });
