import React from "react";
import Upper from "./Upper";
import Bottom from "./Bottom";
import ".../css/Maincss/Todo.css";

export default function Todo() {
  return (
    <div className="header">
      <h1>ToDoLists</h1>
      <Upper />
      <Bottom />
    </div>
  );
}
