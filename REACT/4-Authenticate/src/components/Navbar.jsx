import React, { useState } from "react";
import Navbarlist from "./Navbarlist";
import "../css/navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const clickhandler = () => {
    setClick((click) => !click);
  };
  return (
    <div>
      p
      <nav>
        <div className="leftnav">
          <button>logo</button>
        </div>
        <div className="rightnav">
          <button>Getting Started for free</button>
          <button onClick={clickhandler}>⁝⁝⁝</button>
        </div>
      </nav>
      <div>{click && <Navbarlist />}</div>
    </div>
  );
}
