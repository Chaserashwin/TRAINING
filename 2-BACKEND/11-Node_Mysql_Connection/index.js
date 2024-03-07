const mysql = require("mysql");

// Creating information of server
const connection = mysql.createConnection({
  host: "localhost",
  //   port:3307,
  database: "crudDatabase",
  user: "root",
  password: "",
});

// console.log(connection);

connection.connect((err) => {
  if (err) {
    throw new err();
  } else {
    console.log("Connection to Database Successfull");
  }
});

//create
const insertData = (data) => {
  connection.query("Insert into user SET ?", data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

//Read
const readData = () => {
  connection.query("Select * from user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};
//Update
const updateData = () => {
  connection.query(
    "UPDATE user SET name = 'Shubham' WHERE id = 2",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
};

//Delete
const deleteData = () => {
  connection.query("DELETE FROM user WHERE name = 'shivam'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
};

// function call
readData();
insertData({ id: 1, name: "ashwin", email: "jaiswalash@gmail.com" });
insertData({ id: 2, name: "shivam", email: "jlash@gmail.com" });
updateData();
deleteData();
