import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import "../css/form.css";

export default function Form() {
  return (
    <div className="main">
      <Signup />
      <Login />
    </div>
  );
}
