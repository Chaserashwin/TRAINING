import { useMemo, useState } from "react";
import { InitialItems } from "./3.1-util";

function Demo3() {
  const [count, setCount] = useState(0); //statement_1
  const [items] = useState(InitialItems); //statement_2

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items] //-> dependency array
  ); //statement_3

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Demo3;

// 3-useMemo:-
//   ->there are two files 3-useMemo & 3.1-util which holds the            functionality of {IntialItem}
//   ->3.1-util : a funtion which declare an array with a large size 29_999_999
//   -> when the button is clicked then it is going to run the statement_1 but as in react when a state is updated it is going to re-render the component again and again as clicked
//   -> while itializing the state for items statement_2 runs for the first time only
//   -> but the statement3 run every time during re-render thus causing a lag
//   -> statement3 : it is going to search through this huge amount of array for each new item and check that whether the item is selected or not ,
//   as the isSelected is set to {i === 29_999_998}
