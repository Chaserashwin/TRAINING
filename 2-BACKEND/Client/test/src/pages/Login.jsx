import React from "react";

function Login() {
  return (
    <div>
      <h2>login Page</h2>
      <form action="">
        <label>Enter Name:</label>
        <input type="text" name="uname" />
        <br />
        <label>Enter Email:</label>
        <input type="text" name="uemail" />
        <br />
        <label>Enter Password:</label>
        <input type="text" name="upass" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
