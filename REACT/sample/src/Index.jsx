//for using useEffect functionality
import { useEffect, useState } from "react";

import React from "react";

function Index(props) {
  const [getvalue, setValue] = useState(10);
  const [getApi, setApi] = useState("");

  const handleClick = () => {
    setValue(getvalue + 10);
  };

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setApi(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [getvalue]);

  console.log(getApi);

  return (
    <div>
      {getApi &&
        getApi.slice(0, getvalue).map((item, index) => (
          <>
            <div key={index}>
              <h4>Title & Body for:{index + 1}</h4>
              <div>{item.title}</div>
              <div>{item.body}</div>
            </div>
            <hr />
            {/* {(index + 1) % 10 && <button>Show More</button>} */}
          </>
        ))}
      {getApi.length > getvalue ? (
        <button onClick={handleClick}>Show More...</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
