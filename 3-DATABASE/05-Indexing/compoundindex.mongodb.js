// db.use("teacher");

db.student.createIndex({ age: 1 });

db.collage.find({ age: { $gt: 20 }, rollno: 103 });
