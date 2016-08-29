'use strict';

var _server = require('./index');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// var server = require('./server');
//
// // var _server2 = _interopRequireDefault(_server);
// //
// // function _interopRequireDefault(obj) {
// //   return obj && obj.__esModule ? obj : { default: obj };
// // }
//
// var db = app.get('db');

module.exports = {

  addProduct: function addProduct(req, res) {
    db.add_product_to_inventory([req.body.name, req.body.description, req.body.price, req.body.type], function (err, resp) {
      console.log(err);
      res.json(resp);
    });
  },
  addImagesToProduct: function addImagesToProduct(req, res) {
    db.add_images_to_product([req.body.one_shoe, req.body.both_shoes, req.body.large_image, req.body.close_up], function (err, resp) {
      console.log(err);
      res.json(resp);
    });
  }
};

//server js will admin/addProducts
//admin needs an isAuthed function that checks if they are authorized
