import { useState } from "react";
import Bottom from "./Bottom";
import "../../css/Maincss/Upper.css";

export default function Upper() {
  const [inputvalue, setInputvalue] = useState();
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setCount((count) => count + 1);
    setShow(true);
  };

  return (
    <>
      <div className="uppercontainer">
        <input
          type="text"
          placeholder="What do You Want to Add?"
          value={inputvalue}
        />
        <br />
        <button onClick={handleclick}>Add</button>
        <br />
        {show && <Bottom index={count} data={inputvalue} />}
      </div>
    </>
  );
}
