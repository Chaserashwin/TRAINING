import React, { useState } from "react";
import "../css/Bottom.css";

export default function Bottom({ index, data }) {
  return (
    <div className="lowercontainer">
      <ul>
        <li>
          {index}
          {data}
        </li>
      </ul>
    </div>
  );
}
