import { useState } from "react";

export default function Sample() {
  const [count, setCount] = useState(0);
  const [showplus, setShowplus] = useState(true);
  const [showminus, setShowminus] = useState(true);

  const handleplus = () => {
    if (count >= 20) {
      setShowplus(false);
    } else {
      setCount((count) => count + 1);
      setShowplus(true);
    }
    console.log();
  };

  const handleminus = () => {
    if (count <= 0) {
      setShowminus(false);
    } else {
      setCount((count) => count - 1);
      setShowminus(true);
    }
    console.log();
  };

  // const handlecheck = () => {
  //   console.log(showminus);

  // };

  return (
    <>
      <div>sample</div>
      {showminus && <button onClick={handleminus}>-</button>}

      <button>{count}</button>
      {showplus && <button onClick={handleplus}>+</button>}
    </>
  );
}
