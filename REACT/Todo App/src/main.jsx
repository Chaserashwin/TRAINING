import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Adding from "./components/Adding.jsx";
import Editing from "./components/Editing.jsx";
import Sample from "./components/Sample.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sample />
    {/* <App /> */}
    {/* <Adding />
    <Editing /> */}
  </React.StrictMode>
);
