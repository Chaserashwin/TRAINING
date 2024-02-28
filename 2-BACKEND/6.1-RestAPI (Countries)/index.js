var express = require("express");
var axios = require("axios");

var app = express();

const apiURL = "https://restcountries.com/v3.1";

// 1st Route
app.get("/getCountries", async (req, res) => {
  try {
    let getData = await axios.get(`${apiURL}/all`);
    res.status(200).json({
      success: true,
      posts: getData.data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
});

// 2nd Route
app.get("/getCountries/name/:name", async (req, res) => {
  try {
    const NAME = req.params.name;
    let getData = await axios.get(`${apiURL}/name/:${NAME}`);
    res.status(200).json({
      success: true,
      posts: getData.data.filter((ele) => ele.name == NAME),
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
});

app.listen(2000, (err) => {
  console.log(err);
});
