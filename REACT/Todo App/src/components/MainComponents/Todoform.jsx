import { useState } from "react";
import Todolist from "./Todolist";
import "../../css/Maincss/Todoform.css";

export default function Upper({ setData }) {
  const [getText, setText] = useState("");
  const [place, setPlace] = useState(" + Add a task");
  const [error, setError] = useState(false);
  // const [count, setCount] = useState(0);

  const submitForm = (e) => {
    if (getText !== "") {
      e.preventDefault();
      setData(getText);
    }
    setText("");
    // setData({
    //   id: Math.floor(Math.random() * 100) + Date.now(),
    //   text: getText,
    //   complete: false,
    // });
  };

  const changehandler = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleplaceholder = () => {
    setPlace("Try typing 'Pay utilities bill by Sunday 5pm'");
  };

  const handleclick = () => {
    if (getText == "") setError(true);
    else {
      setError(false);
      // setText("");
      // setPlace("Try typing 'Pay utilities bill by Sunday 5pm'");
    }
    // setCount((count) => count + 1);
    // // setError(false);
    // <Todolist index={count} data={getText} />;
    // // setError(true);
  };

  return (
    <>
      <div className="uppercontainer">
        <form className="container" onSubmit={submitForm}>
          <input
            type="text"
            placeholder={place}
            value={getText}
            onChange={changehandler}
            onClick={handleplaceholder}
          />
          <button id="add" onClick={handleclick}>
            Add
          </button>
        </form>
        {error && <div>Empty String is not accepted</div>}
        {/* {error && alert("Empty String is not accepted")} */}
      </div>
      {/* {<Todolist index={count} data={inputvalue} />}asdajh */}
    </>
  );
}
