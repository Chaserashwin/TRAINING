import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/header.css";

export default function Header() {
  // const [click, setClick] = useState(false);
  // const clickhandler = () => {
  //   setClick((click) => !click);
  // };
  return (
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  );
}
