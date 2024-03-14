use("teacher");

db.createCollection("user", {
  validator: {
    $jsonSchema: {
      required: ["name", "email", "age"],
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
        age: {
          bsonType: "number",
          description: "age must be an integer between 18 and 120",
        },
        hobbies: {
          bsonType: "array",
          description: "hobbies field should be array",
        },
      },
    },
  },
});

db.user.insertOne({
  name: "ashwin",
  email: "slfjs@gmail.com",
  age: 23,
  hobbies: ["chess", "running"],
});
