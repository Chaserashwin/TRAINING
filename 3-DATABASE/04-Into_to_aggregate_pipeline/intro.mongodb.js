use("aggreagate_pipeline");

db.collage.insertMany([
  {
    _id: 1,
    name: "ashwin",
    gender: "male",
    hobbies: "football",
    age: 22,
    score: [20, 30, 40, 50],
  },
  {
    _id: 2,
    name: "nikhil",
    gender: "male",
    hobbies: "singing",
    age: 20,
    score: [120, 130, 140, 150],
  },
  {
    _id: 3,
    name: "parag",
    gender: "male",
    hobbies: "football",
    age: 23,
    score: [220, 230, 240, 250],
  },
  {
    _id: 4,
    name: "ladki",
    gender: "female",
    hobbies: "dancing",
    age: 24,
    score: [320, 330, 340, 530],
  },
  {
    _id: 5,
    name: "mahila",
    gender: "female",
    hobbies: "singing",
    age: 25,
    score: [420, 430, 440, 450],
  },
]);

//* 1st query
db.collage.aggregate([
  {
    $group: {
      _id: "$age",
    },
  },
]);

//* 2nd query
db.collage.aggregate([
  {
    $group: {
      _id: "$age",
      nameofstudent: { $push: "$name" },
    },
  },
]);

db.collage.aggregate([
  {
    $group: {
      _id: "$age",
      nameofstudent: { $push: "$gender" },
    },
  },
]);

db.collage.aggregate([
  {
    $group: {
      _id: "$age",
      nameofstudent: { $push: "$gender" },
      wholedoc: { $$ROOT },
    },
  },
]);

//* count per age of male student
db.collage.aggregate([
  { $match: { gender: "male" } },
  {
    $group: {
      _id: "$age",
      nameofstudent: { $push: "$name" },
    },
  },
]);

db.collage.aggregate([
  { $match: { gender: "male" } },
  {
    $group: {
      _id: "$age",
      countofstudent: { $sum: 1 },
    },
  },
]);

// sort
db.collage.aggregate([
  { $match: { gender: "male" } },
  {
    $group: {
      _id: "$age",
      countofstudent: { $sum: 1 },
    },
  },
  { $sort: { countofstudent: -1 } },
]);

//* find the max in ur query
db.collage.aggregate([
  { $match: { gender: "male" } },
  {
    $group: {
      _id: "$age",
      countofstudent: { $sum: 1 },
    },
  },
  { $sort: { countofstudent: -1 } },
  {
    $group: {
      _id: null,
      maxvalue: { $max: "$countofstudent" },
    },
  },
]);

// $toDouble Operator
db.collage.aggregate([
  {
    $group: {
      _id: "$age",
      storagedatacount: { $sum: { $toDouble: "$age" } },
    },
  },
]);

//* find the user hobbies per age group
db.collage.aggregate([
  {
    $group: {
      _id: "$age",
      hobbiesdata: { $push: "$hobbies" }, // !not give the number
      //   hobbiesdata: { $sum:1 },
    },
  },
]);

// find the average of age
db.collage.aggregate([
  {
    $group: {
      _id: null,
      average: {
        $avg: $age,
      },
    },
  },
]);
