import React, { useState } from "react";
import "../css/Editing.css";

function Editing({ val, Check }) {
  // let Value = { val };
  // const [Value, setvalue] = useState([]);

  // const todoarr = Value.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });

  const valuehandler = (e) => {
    console.log(e.target.value);
    setvalue(e.target.value);
  };

  return (
    <div className="lowerContainer">
      <div className="container">
        {/* <h5>{val}</h5> */}
        <input type="checkbox" name="first" id="first" />
        {/* {{ Check } && { todoarr }} */}
        {val}
      </div>
    </div>
  );
}

export default Editing;
