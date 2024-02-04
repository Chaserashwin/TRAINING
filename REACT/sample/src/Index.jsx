//for using useEffect functionality
import { useEffect, useState } from "react";

import React from "react";

function Index() {
  const [getApi, setApi] = useState("");
  const [count, setcount] = useState(0);
  const [show, setshow] = useState(false);


  const checkhandler = () => {
    count % 10 == 0 setshow(true)
  }

  const changehandler = () => {
    // console.log();
    setcount((count) => count + 10);    
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
  }, []);

  console.log(getApi);

  return (
    <>
      {getApi &&
        getApi.map((item, index) => (
          <>
            <div key={index} onChange={changehandler}>
              <h4>Title {index}</h4>
              <div>{item.title}</div>
              <h4>Body {index}</h4>
              <div>{item.body}</div>
            </div>
            {(index + 1) % 10 && <button>Show More</button>}
          </>
        ))}
      );
    </>
  );
}

export default Index;
