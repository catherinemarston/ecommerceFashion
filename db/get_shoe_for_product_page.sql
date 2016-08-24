SELECT Products.product_id, Products.name, Products.description, Products.Price, Images.one_shoe, Images.both_shoes, Images.large_image, Images.close_up
FROM Products JOIN Images ON Images.product_id = Products.product_id WHERE Products.product_id = $1;
