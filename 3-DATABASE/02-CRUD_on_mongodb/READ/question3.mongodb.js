use("products");

db.product.insertMany([
  {
    _id: 1,
    product_name: "Smartphone X",
    price: 59.99,
    brand: "TechCo",
    quantity_available: 100,
  },
  {
    _id: 2,
    product_name: "Smartphone Y",
    price: 39.99,
    brand: "TechCo",
    quantity_available: 100,
  },
  {
    _id: 3,
    product_name: "Smartphone Z",
    price: 59.99,
    brand: "TechCo",
    quantity_available: 100,
  },
  {
    _id: 4,
    product_name: "Smartphone A",
    price: 29.99,
    brand: "TechCo",
    quantity_available: 100,
  },
  {
    _id: 5,
    product_name: "Smartphone B",
    price: 599.99,
    brand: "TechCo",
    quantity_available: 100,
  },
]);

db.product.find({ price: { lt: 50 } });
