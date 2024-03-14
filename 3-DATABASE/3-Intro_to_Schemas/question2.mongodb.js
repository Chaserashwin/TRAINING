use("teacher");

db.runCommand({
  collMod: "user",
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
        urdata: {
          bsonType: "array",
          description: "must be a type of list ",
          items: {
            bsonType: "object",
            properties: {
              interest: {
                bsonType: "string",
                description: "must be string type",
              },
              email: {
                bsonType: "string",
                pattern: "^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$",
                description: "email must be valid email",
              },
              mobno: {
                bsonType: "number",
                description: "must be a number",
              },
            },
          },
        },
      },
    },
  },
});

// db.user.insertOne({
//   name: "parag",
//   email: "slfjs@gmail.com",
//   age: 23,
//   hobbies: ["chess", "running"],
// });

db.user.insertOne({
  name: "nikhil",
  email: "nikhil@gmail.com",
  age: 22,
  hobbies: ["chess", "running"],
  urdata: [
    { interest: "running", email: "nikhilsharma@gmail.com", mobno: 454252452 },
  ],
});
