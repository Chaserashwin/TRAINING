import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Adding from "./components/Adding.jsx";
import Editing from "./components/Editing.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Adding />
    <Editing />
  </React.StrictMode>
);
