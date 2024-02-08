import React from "react";
import { useState } from "react";
import Authenticate from "./Authenticate";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const USERNAME = import.meta.env.VITE_USERNAME;
  const PASSWORD = import.meta.env.VITE_PASSWORD;

  console.log(USERNAME);
  console.log(PASSWORD);

  const changehandlerusername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const changehandlerpassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleclick = () => {
    <Authenticate username={username} password={password} />;
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleclick}>
        <label htmlFor="username">Username</label>
        <input onChange={changehandlerusername} type="text" value={username} />
        <label htmlFor="password">Password</label>
        <input onChange={changehandlerpassword} type="text" value={password} />
        <button>Submit</button>
      </form>
    </div>
  );
}
