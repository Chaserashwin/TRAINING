import { useState } from "react";
import Bottom from "./Bottom";
import "../../css/Maincss/Upper.css";

export default function Upper() {
  const [inputvalue, setInputvalue] = useState("");
  const [count, setCount] = useState(0);
  // const [show, setShow] = useState(true);

  const changehandler = (e) => {
    console.log(e.target.value);
    setInputvalue(e.target.value);
  };

  const handleclick = () => {
    setCount((count) => count + 1);
    // setShow(false);
    <Bottom index={count} data={inputvalue} />;
    // setShow(true);
  };

  return (
    <>
      <div className="uppercontainer">
        <input
          type="text"
          placeholder="What do You Want to Add?"
          value={inputvalue}
          onChange={changehandler}
        />
        <br />
        <button onClick={handleclick}>Add</button>
        {/* <br /> */}
        {/* {show && <Bottom index={count} data={inputvalue} />} */}
      </div>
      {/* {<Bottom index={count} data={inputvalue} />}asdajh */}
    </>
  );
}
