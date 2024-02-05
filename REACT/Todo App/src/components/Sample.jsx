import { useState } from "react";

export default function Sample() {
  const [count, setCount] = useState(0);
  const [showplus, setShowplus] = useState(true);
  const [showminus, setShowminus] = useState(true);

  const handleplus = () => {
    setCount(count + 1);
    console.log();
  };

  const handleminus = () => {
    setCount(count - 1);

    console.log();
  };

  const handlecheck = () => {
    count < 0 ? setShowminus(false) : setShowminus(true);
    count > 20 ? setShowplus(false) : setShowplus(true);
  };

  return (
    <>
      <div>sample</div>
      {showminus && (
        <button onClick={handleminus} onChange={handlecheck}>
          -
        </button>
      )}

      <button>{count}</button>
      {showplus && (
        <button onClick={handleplus} onChange={handlecheck}>
          +
        </button>
      )}
    </>
  );
}
