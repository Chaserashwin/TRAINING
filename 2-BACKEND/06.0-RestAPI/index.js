var express = require("express");
var axios = require("axios");

var app = express();
app.use(express.json()); // for post method api

const apiURL = "https://jsonplaceholder.typicode.com";
//^ API-1
app.get("/getPosts", async (req, res) => {
  // fetch(apiURL).then().catch()
  //   let getData = await axios.get(`${apiURL}/posts`);
  //     console.log(getData);
  //   console.log(getData.data);
  try {
    let getData = await axios.get(`${apiURL}/posts`);
    res.status(200).json({
      success: true,
      posts: getData.data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

//^API-2
app.get("/getComments", async (req, res) => {
  try {
    let getData = await axios.get(`${apiURL}/comments`);
    res.status(200).json({
      success: true,
      posts: getData.data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

//^API-3
app.get("/getUsers", (req, res) => {
  fetch(`${apiURL}/users`)
    .then((response) => {
      //   console.log(response.json());
      return response.json();
    })
    .then((data) => {
      res.status(200).json({
        success: true,
        posts: data,
      });
    })
    .catch((error) => {
      res.status(404).json({
        success: false,
        message: error,
      });
    });
});

//!---------------------------------------------------------------------------------------------//
//^API-4: wont run bcoz online API wont allow us to add any extra info

app.post("/addNewPost", async (req, res) => {
  try {
    var user = {
      userId: req.body.userId,
      id: req.body.id,
      title: req.body.title,
      body: req.body.message,
    };
    let addData = await axios.post(`${apiURL}/posts`, user);
    console.log(addData);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
});

app.get("/SelectedPost/:userId", async (req, res) => {
  try {
    const USERID = req.params.userId;
    let getData = await axios.get(`${apiURL}/posts`);
    res.status(200).json({
      success: true,
      posts: getData.data.filter((ele) => ele.userId == USERID),
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

app.get("/SelectedPost/:userId/:id", async (req, res) => {
  try {
    const USERID = req.params.userId;
    const ID = req.params.id;
    let getData = await axios.get(`${apiURL}/posts`);
    res.status(200).json({
      success: true,
      posts: getData.data
        .filter((ele) => ele.userId == USERID)
        .filter((ele) => ele.id == ID),
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error,
    });
  }
});

app.listen(2000, (err) => {
  if (err) console.log(err);
  else console.log("successfully run at port 2000");
});
