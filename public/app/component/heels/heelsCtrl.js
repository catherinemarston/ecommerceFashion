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
var module = angular.module('app');

function controller (heelsSrvc) {
  var model = this;
  model.$onInit = function() {
    heelsSrvc.getAllHeels()
    .then(function(response){
      model.products = response;
}
module.component('heelComponent', {
  templateUrl: "./heels/heels.html",
  controllerAs: "model",
  // $ctrl will the alias without controllerAs, so now model is
  controller: [heelsSrvc, controller];

      })
    }
  }
})
