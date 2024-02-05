import "../css/Adding.css";
import { useState } from "react";
import Editing from "./Editing";

function Adding() {
  const [todolist, SetTodolist] = useState("");

  const changehandler = (e) => {
    console.log(e.target.value);
    SetTodolist(e.target.value);
  };

  const [show, setShow] = useState(false);

  //   const handleclick = (e) => {
  //     e.preventDefault();
  //     setShow(true);
  //   };

  return (
    <>
      <div className="UpperContainer">
        <h1>ToDoLists</h1>
        <input
          type="text"
          placeholder="What do You Want to Add?"
          value={todolist}
          onChange={changehandler}
          onClick={() => {
            setShow(false);
          }}
        />
        {/* {todolist} */}
        <br />
        <input
          type="button"
          value="Add"
          onClick={() => {
            setShow(true);
          }}
        />
        <br />

        {show && <Editing val={todolist} Check={show} />}
      </div>
    </>
  );
}

export default Adding;
