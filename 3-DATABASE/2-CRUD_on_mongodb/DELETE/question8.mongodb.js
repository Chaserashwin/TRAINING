use("studentsdelete");

db.students.insertMany([
  {
    name: "ashwin",
    grad_year: 2000,
  },
  {
    name: "nikhil",
    grad_year: 2024,
  },
  {
    name: "parag",
    grad_year: 2027,
  },
  {
    name: "ladka",
    grad_year: 2013,
  },
]);

db.students.deleteOne({ grad_year: { $lt: 2015 } });
db.students.deleteMany({ grad_year: { $lt: 2015 } });
