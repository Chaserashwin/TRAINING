use("teacher");

db.runCommand({
  collMod: "storeManager",
  validator: {
    $jsonSchema: {
      required: ["user", "role", "duties"],
      properties: {
        user: {
          bsonType: "string",
          description: "user field should be string type",
        },
        role: {
          bsonType: "string",
          description: "role must be type of string",
        },
        mobno: {
          bsonType: "number",
          description: "mobno must be type of number",
        },
        duties: {
          bsonType: "array",
          description: "must be type of list",
          items: {
            bsonType: "object",
            required: ["name", "email"],
            properties: {
              name: {
                bsonType: "string",
                description: "name field should be string type",
              },
              email: {
                bsonType: "string",
                pattern: "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$",
                description: "email must be valid email",
              },
            },
          },
        },
      },
    },
  },
});

// db.storeManager.insertOne({
//   user: "nikhil",
//   role: "manager",
// duties: [{ name: "nikhil sharma", email: "sdfjs@gmail.com" }],
// });
