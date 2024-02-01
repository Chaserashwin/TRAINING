import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/firstcomponent.jsx";
import Form from "./components/formmake.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <Form /> */}
    {/* <footer /> */}
    {/* <content /> */}
  </React.StrictMode>
);
