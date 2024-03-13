use("employees");

db.employee.insertMany([
  {
    emp_name: "ashwin",
    department: "marketing",
  },
  {
    emp_name: "samily",
    department: "finance",
  },
  {
    emp_name: "nikhil",
    department: "sales",
  },
  {
    emp_name: "ashwin",
    department: "marketing",
  },
]);

db.employee.updateMany(
  { department: "marketing" },
  { $set: { department: "sales" } }
);
