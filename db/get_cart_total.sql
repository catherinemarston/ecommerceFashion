SELECT sum(Products.price * Cart.quantity)
FROM Products
JOIN Cart on Cart.product_id = Products.product_id
JOIN Users ON Users.user_id = Cart.user_id
WHERE Cart.user_id = $1;
