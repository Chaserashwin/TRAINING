use("teacher");

db.student.find();

db.student.findOne({ firstname: "nikhil" });

db.student.find([{ firstname: "parag" }, { firstname: "nikhil" }]);

// for printing rollno more that 100
db.student.find({ rollno: { $gt: 100 } });

// for printing rollno less that 103
db.student.find({ rollno: { $lt: 103 } });

// for printing the count
db.student.find({ rollno: { $lt: 103 } }).count();

db.student.find({ rollno: { $lt: 103 } }).forEach((x) => {
  printjson(x);
});
