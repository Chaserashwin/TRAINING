use("aggreagate_pipeline");

// db.product.insertMany([
//   {
//     _id: 1,
//     name: "patanjali mobile",
//     price: 3000,
//     description: "its a organic mobile",
//     quantity_available: 100,
//     prod_cat: "digital",
//   },
//   {
//     _id: 2,
//     name: "nirma",
//     price: 100,
//     description: "its a organic powder",
//     quantity_available: 100,
//     prod_cat: "non-digital",
//   },
//   {
//     _id: 3,
//     name: "patanjali car",
//     price: 130009,
//     description: "its a organic car",
//     quantity_available: 100,
//     prod_cat: "digital",
//   },
//   {
//     _id: 4,
//     name: "cycle",
//     price: 4300,
//     description: "its protects the environment",
//     quantity_available: 100,
//     prod_cat: "non-digital",
//   },
//   {
//     _id: 5,
//     name: "laptop",
//     price: 50000,
//     description: "its is used for coding",
//     quantity_available: 100,
//     prod_cat: "non-digital",
//   },
// ]);

//* find the total number of orders for each product category
db.product.aggregate([
  { $match: { total_orders: "digital" } },
  {
    $group: {
      _id: "$prod_cat",
      total_orders: { $push: "$prod_cat" },
    },
  },
  {
    $group: {
      _id: null,
      digno: {},
    },
  },
]);

// db.product.aggregate([
//   {
//     $match: { total_orders: "digital" },
//   },
// ]);
