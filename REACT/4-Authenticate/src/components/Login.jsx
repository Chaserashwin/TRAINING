import React from "react";
import { useState } from "react";
// import Authenticate from "./Authenticate";
import "../css/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validuser, setValiduser] = useState(false);
  const [validpassword, setValidpassword] = useState(false);
  const [check, setCheck] = useState(false);

  const USERNAME = import.meta.env.VITE_USERNAME;
  const PASSWORD = import.meta.env.VITE_PASSWORD;

  console.log(USERNAME);
  console.log(PASSWORD);

  const usernamechanger = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
    if (username.length > 8) setValiduser(true);
    else setValiduser(false);
  };

  const passwordchanger = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
    if (password.length < 8) setValidpassword(true);
    else setValidpassword(false);
  };

  // const handleclick = () => {
  //   if (validuser || validpassword) setCheck(true);
  //   else setCheck(false);
  // };

  const Authenticate = () => {
    if (username !== USERNAME && password !== PASSWORD) setCheck(true);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form-wrapper">
        <form onSubmit={Authenticate}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              onChange={usernamechanger}
              type="text"
              placeholder="Enter Username"
              value={username}
            />
            {/* {validuser ? "Invalid username or password" : ""} */}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              onChange={passwordchanger}
              type="text"
              placeholder="Enter Password"
              value={password}
            />
          </div>
          <div>
            <button id="btn">Submit</button>
            {check ? <p>Invalid username or password</p> : " "}
          </div>
        </form>
      </div>
      {/* <div className="form-group">
        {check !== "false" ? (
          <p>Invalid username or password</p>
        ) : (
          <p>Valid username or password</p>
        )}
      </div> */}
    </div>
  );
}
