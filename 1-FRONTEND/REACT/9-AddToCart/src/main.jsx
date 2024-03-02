import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Navbar />
    <Login /> */}
  </React.StrictMode>
);
