var app = require('./server');
var db = app.get('db');
//backend controller to handle posting products to cart
module.exports = {
  function addProductToCart (req, res) {
    db.add_product_to_cart([req.body.user_id, req.body.product_id], function(err, resp){
      console.log(err);
      res.json(resp);
    });
  };
}
