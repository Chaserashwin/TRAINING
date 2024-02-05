import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Adding from "./components/Upper.jsx";
import Editing from "./components/Bottom.jsx";
import Sample from "./components/Sample.jsx";
import Todo from "./components/Todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sample />
    {/* <App /> */}
    <Todo />
  </React.StrictMode>
);
