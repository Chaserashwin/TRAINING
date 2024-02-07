import React, { useState } from "react";
import "../../css/Maincss/Bottom.css";
import Table from "./Table";

export default function Bottom({ listitems, deleteTodo, statusChange }) {
  console.log(listitems);
  return (
    <div className="lowercontainer">
      <h3>Todo List:-</h3>
      <Table
        listitems={listitems}
        deleteTodo={deleteTodo}
        statusChange={statusChange}
      />
    </div>
  );
}

{
  /* {listitems &&
  listitems.map((item, index) => (
    <div id="todo-list" key={index}>
      {item}
    </div> */
  /* ))} */
}

{
  /* <table>
  <thead>
    <tr>
      <th id="first">List</th>
      <th id="second">Status</th>
      <th id="third">Close</th>
    </tr>
  </thead>
  {listitems &&
    listitems.map((item, index) => {
      <tbody>
        <tr key={index}>
          <td>{item.text}</td>
          <td>
            <button onClick={() => statusChange(item.id)}>
              {item.complete ? "Completed" : "Pending"}
            </button>
          </td>
          <td>
            <button onClick={() => deleteTodo(item.id)}>🗑️</button>
          </td>
        </tr>
      </tbody>;
    })}
</table> */
}
