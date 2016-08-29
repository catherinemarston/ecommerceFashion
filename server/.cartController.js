'use strict';

var app = require('./index');
var db = app.get('db');
//backend controller to handle posting products to cart
module.exports = {
  addProductToCart: function(req, res) {
    console.log(req.body);
    db.add_product_to_cart([req.body.user_id, req.body.product_id], function (err, resp) {
      res.status(200).send('it was good');
      res.json(resp);
    });
  },
  getCart: function(req, res) {
    db.get_cart(req.user.user_id, function (err, product) {
      res.status(200).send(product);
    });
  },
  getOneProduct: function(req, res) {
    db.get_shoe_for_product_page(req.params.id, function (err, product) {
      res.status(200).send(product);
    });
  },
  getTotalPrice: function(req, res, next) {
    db.get_order_total(req.user.user_id, function (err, total) {
      res.status(200).send(total);
    });
  }
};
