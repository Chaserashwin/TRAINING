import React, { useState } from "react";

export default function Authenticate(username, password) {
  const [result, setResult] = useState("");
  const [check, setCheck] = useState(false);
  const validate = (username, password) => {
    if (username) {
      setCheck(true);
    }
    if (password) {
      setCheck(true);
    }
  };

  const validation = () => {
    if (check) setResult("Successfull login");
    else setResult("Invalid username or password");
  };
  return <div>Authenticate</div>;
}
