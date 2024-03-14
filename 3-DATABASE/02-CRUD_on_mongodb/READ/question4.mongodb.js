use("users");

db.user.insertMany([
  {
    _id: 1,
    username: "ashwin",
    age: 22,
  },
  {
    _id: 2,
    username: "johndoe",
    age: 22,
  },
  {
    _id: 3,
    username: "johndoe",
    age: 22,
  },
  {
    _id: 4,
    username: "johndoe",
    age: 22,
  },
]);

db.user.find();
