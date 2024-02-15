import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Sample from "./hooks/Sample.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <App />
    </div>
    {/* <Sample /> */}
  </React.StrictMode>
);
