SELECT Products.name, Products.description, Products.Price, Images.one_shoe, Images.both_shoes
FROM Products JOIN Images ON Images.product_id = Products.product_id;
