import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../state/slices/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const input = Number(val);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <div>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type="number"
          />
          <button onClick={() => dispatch(incrementByAmount(input))}>
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
