use("teacher");

// db.products.insertMany([
//   {
//     name: "patanjali mobile",
//     price: 3000,
//     description: "its a organic mobile",
//   },
//   {
//     name: "nirma",
//     price: 100,
//     description: "its a organic powder",
//   },
//   {
//     name: "patanjali car",
//     price: 130009,
//     description: "its a organic car",
//   },
//   {
//     name: "cycle",
//     price: 4300,
//     description: "its protects the environment",
//   },
//   {
//     name: "laptop",
//     price: 50000,
//     description: "its is used for coding",
//   },
// ]);

//* for 1st query
// db.products.find({price:{$mod:[10,0]}})

//* for 2nd query
// db.products.createIndex({description:"text"})
// db.products.find({$text:{$search:"organic"}})

//* for 3rd query
db.products.createIndex({ name: "text" });
db.products.find({ $text: { $search: "" } });
