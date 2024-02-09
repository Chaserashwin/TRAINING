import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const changeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("cgc", username);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", password);
    localStorage.setItem("obj", { username, email, password });
    navigate("./login");
  };

  return (
    <div className="login">
      <h1>Signup</h1>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Enter Username:</label>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={changeUsername}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Enter Email Id:</label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={changeEmail}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Enter Password:</label>
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={changePassword}
            />
          </div>
          <button>SignUp</button>
        </form>
      </div>
    </div>
  );
}
