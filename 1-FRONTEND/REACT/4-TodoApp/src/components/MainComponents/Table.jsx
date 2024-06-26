import React, { useState } from "react";
import "../../css/Maincss/Table.css";

export default function Table({ listitems, deleteTodo, statusChange }) {
  // const [info, setInfo] = useState([]);
  console.log("data", listitems);

  // setInfo[..React.info,...listitems];
  const info = [...listitems];
  console.log("data", info);
  // const [status, setStatus] = useState("completed");
  // const [check, setCheck] = useState(true);
  // const info=[
  //   id:'listitems.id',
  //   text:
  // ]

  return (
    <>
      <table>
        <thead className="head">
          <tr>
            <th id="first">List</th>
            <th id="second">Status</th>
            <th id="third">Close</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item) => {
            return (
              <tr key={item.id}>
                {item.complete ? (
                  <td className="marked">{item.text}</td>
                ) : (
                  <td>{item.text}</td>
                )}
                <td>
                  <button id="a" onClick={() => statusChange(item.id)}>
                    {item.complete ? "Completed" : "Pending"}
                  </button>
                </td>
                <td>
                  <button id="b" onClick={() => deleteTodo(item.id)}>
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// {/* // <tbody>
// // <tr>
// //   <td>{data.text}</td>
// //   <td>{/* <button onClick={clickhandler}>{status}</button> */}</td>
// //   <td>
// //     <button>🗑️</button>
// //   </td>
// // </tr>
// // </tbody> */}
// {

{
  /* // const [data, setData] = useState([]);
  // setData[...listitems];
          // 
          // const arr = [
          //   {
          //     id: { Index },
          //     data: { Data },
          //     // status: 23,
          //   },
          // ];
        
          // const userHtml = users.map((user, index) => {
          //   return <li key={user.id}>{user.data}</li>;
          // });
        
          // const clickhandler = () => {
          //   if (check) {
          //     setStatus("pending");
          //     setCheck(false);
          //     return;
          //   } else {
          //     setStatus("completed");
          //     setCheck(true);
          //   }
          // }; */
}
