use("teacher");

db.createCollection("storeManager", {
  validator: {
    $jsonSchema: {
      required: ["user", "role"],
      properties: {
        user: {
          bsonType: "string",
          description: "user field should be string type",
        },
        role: {
          bsonType: "string",
          description: "role must be typr of string",
        },
        mobno: {
          bsonType: "number",
          description: "mobno must be type of number",
        },
      },
    },
  },
});

// db.storeManager.insertOne({
//   user: "ashwin",
//   role: "tainee",
//   mobno: "sdfsfskdj",
// });

// db.storeManager.insertOne({
//   user: "ashwin",
//   role: "tainee",
//   mobno: 954353453,
// });

db.storeManager.insertOne({
  user: "nikhil",
  role: "trainer",
  mobno: 954353453,
});
