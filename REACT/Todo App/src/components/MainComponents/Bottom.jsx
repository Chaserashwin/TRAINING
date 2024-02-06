import React, { useState } from "react";
import "../../css/Maincss/Bottom.css";
import Table from "./Table";

export default function Bottom({ index, data }) {
  return (
    <div className="lowercontainer">
      <h4>Todo List:-</h4>
      <Table data={data} />
    </div>
  );
}
