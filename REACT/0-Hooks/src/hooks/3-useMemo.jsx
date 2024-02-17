import React, { useState } from "react";
import { InitialItems } from "./3.1-util";

function Demo3() {
  const [count, setCount] = useState(0); //statement_1
  const [items] = useState(InitialItems); //statement_2

  const selectedItem = items.find((item) => item.isSelected); //statement_3
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Demo3;
