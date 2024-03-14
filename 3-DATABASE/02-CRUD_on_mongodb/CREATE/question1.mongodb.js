// consider a mongodb collection named products that stores information about various products. You need to add a new product to this collection using the insertOne operation. Write a mongodb query to insert a document representing a new product with the following details:
// -  product_name: "Smartphone X",
// - price: 599.99,
// - brand: "TechCo",
// - quantity_available: 100,

use("products");

db.createCollection("product");

db.product.insertOne({
  product_name: "Smartphone X",
  price: 599.99,
  brand: "TechCo",
  quantity_available: 100,
});
