import React from "react";

function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form action="">
        <label>Enter Your Name:</label>
        <input type="text" name="uname" />
        <br />
        <label>Enter Your Email:</label>
        <input type="text" name="uemail" />
        <br />
        <label>Enter Your Password:</label>
        <input type="text" name="upass" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
