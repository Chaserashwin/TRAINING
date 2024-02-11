import React from "react";
import { useEffect, useState } from "react";

function Demo2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The Code that we want to run
    console.log("The count is:", count);

    // Optional return function
    return () => {
      console.log("I am being cleaned up!");
    };
  }, [count]); // The dependency array

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Demo2;
