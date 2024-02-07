import React, { useState } from "react";
import Upper from "./Upper";
import Bottom from "./Bottom";
// import Table from "./Table";
import "../../css/Maincss/Todo.css";

export default function Todo() {
  const [data, setData] = useState([]);

  const addTodos = (text) => {
    setData([...data, { id: data.length + 1, text, complete: false }]);
  };

  const deleteTodo = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const statusChange = (ids) => {
    setData(
      data.map((items) =>
        items.id === ids
          ? { ...items, complete: (items.complete = true) }
          : items
      )
    );
  };

  console.log(data);
  return (
    <div className="header">
      <h1>
        <u>ToDoLists</u>
      </h1>
      <Bottom
        listitems={data}
        deleteTodo={deleteTodo}
        statusChange={statusChange}
      />
      <Upper setData={addTodos} />
    </div>
  );
}

//Spread function
// const arr = [1,2,3];

// const arr2 = [...arr,4]

// [1,2,3,4]

{
  /* <Table
  listitems={data}
  deleteTodo={deleteTodo}
  statusChange={statusChange}
/> */
}
