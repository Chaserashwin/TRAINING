import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a joke",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "another joke",
      content: "this is another joke",
    },
    {
      id: 1,
      title: "a third joke",
      content: "this is a third joke",
    },
    {
      id: 1,
      title: "a forth joke",
      content: "this is a forth joke",
    },
    {
      id: 1,
      title: "a fifth joke",
      content: "this is a fifth joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
