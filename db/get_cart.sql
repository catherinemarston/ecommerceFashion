SELECT Products.name, Products.description, Products.price, Cart.quantity, Images.one_shoe JOIN Cart
ON Cart.product_id = Products.product_id JOIN Images ON Images.product_id = Products.product_id JOIN Users
ON Cart.user_id = Users.user_id WHERE Cart.user_id = $1; 
