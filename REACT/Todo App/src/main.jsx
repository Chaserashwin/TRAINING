import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Todo from "./components/Todo.jsx";
import Sample from "./components/Sample.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sample />
    {/* <App /> */}
    <Todo />
  </React.StrictMode>
);
