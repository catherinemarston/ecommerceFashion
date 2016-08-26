var module = angular.module('app');

function addQuantity() {
  var model = this;

}
module.component('addProductComponent', {
  //isolated scope binding
  // bindings: {
  //   value: "=",
  //   name: "=",
  //   quantity: "=",
  //   total: "="
  // },

  controller: function() {
    function addProductToCart() {

    }

  },
    template: '<button type = "button" ng-click = "$ctrl.addProductToCart"></button>',
});
//component attached to every button where someone wants to add something to their cart
// http.post method with service to handle posting products into the cart
// sql query is all foloows:
// INSERT (product_id, user_id) INTO CART ($1, $2)
//
// db.add_product_to_cart(req.params.)
