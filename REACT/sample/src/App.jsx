import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App(props) {
  const [getValue, setValue] = useState(0);
  const [getApi, setApi] = useState("");

  const handleClick = () => {};
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setApi(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(getApi);

  return (
    <div>
      {getApi &&
        getApi.map((item, index) => <div key={index}>{item.name}</div>)}
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default App;
