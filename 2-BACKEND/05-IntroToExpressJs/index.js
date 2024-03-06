var express = require("express"); // importing express
var path = require("path");
var app = express(); // creating an object for express

// var bodyParser = require("body-parser"); // depricated as already included in express
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if true read array and if false read string

//----------------------------------------------------------------------------------------------//

// ^Routes
// app.get(route,callback);

// 1st Route
app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
  //   console.log(req, res);
});

// 2nd Route
app.get("/admin", (req, res) => {
  res.send("Admin page");
  //   console.log(req, res);
});

//-------------------------------------------------------------------------------------------//

app.get("/form1", (req, res) => {
  //!--> This is not able to fetch the file due to incorrect '/'
  //   console.log(__dirname + "/views/form1.html");
  //   res.sendFile(__dirname + "/Views/form.html");
  //^--> Correct way to join the path
  res.sendFile(path.join(__dirname, "views", "GETform.html"));
  console.log(path.join(__dirname, "views", "GETform.html"));
});

app.get("/getdata", (req, res) => {
  var name = req.body.username;
  var password = req.body.userpassword;
  res.send(`Welcome ${name} and password is ${password}`);
});

//-----------------------------------------------------------------------------------------//
//^ How method POST is different ?
app.get("/form2", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "POSTform.html"));
});

app.post("/postdata", (req, res) => {
  console.log(req.body);
  res.send(
    `Welcome ${req.body.username} and password is ${req.body.userpassword} and ur hobbies are: ${req.body.userhobbies}`
  );
});

//-----------------------------------------------------------------------------------------//
//This is used to change content with variables and we can access these variables using params

app.get("/userinfo", (req, res) => {
  res.send("hi userinfo");
});

app.get("/userinfo/:username", (req, res) => {
  var name = req.params.username;
  res.send(`hi ${name}`);
  //   res.send("hi there ");
});
//-------------------------------------------------------------------------------------------//

//!-------------------------------------Task 1-----------------------------------------------//
// To receive input name email and marks of three subjects and display their sum in another page

app.get("/studentform", (req, res) => {
  res.sendFile(path.join(__dirname, "Task1", "studentform.html"));
});

app.get("/studentdata", (req, res) => {
  var name = req.query.username;
  var email = req.query.useremail;
  var sub1 = req.query.sub1;
  var sub2 = req.query.sub2;
  var sub3 = req.query.sub3;
  var marks = parseInt(sub1) + parseInt(sub2) + parseInt(sub3);

  res.send(
    `Welcome ${name} and email is ${email} \n Total Marks of Three Subjects are:- ${marks}`
  );
});

//!---------------------------------------------------------------------------------------------//

//^This is to initiate at which server port this must run
app.listen(1000, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at 1000`);
});

//-------------------------------------------------------------------------------------------//

/*Points to be Remembered:-

Q-> Features of EXPRESS JS ?
-> In express we don't have to mention which type of response [res] we are sending eg. html or plain text. It will recognize itself
-> In every Route the response [res.send()] will be only get once we can't use multiple

Q-> GET vs POST ?
-> In case of Get method everything in the address bar is visible but it is fast thats why used in SEO
-> Post method is used to hide the relevant info like password so by using Post method we can't see in the address bar

*/
