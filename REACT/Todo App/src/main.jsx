import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Todo from "./components/MainComponents/Todo.jsx";
import Sample from "./components/MainComponents/Sample.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Todo />
    {/* <Sample /> */}
    {/* <App /> */}
  </React.StrictMode>
);
