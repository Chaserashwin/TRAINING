import React, { useState } from "react";
import "../../css/Maincss/Table.css";

export default function Table({ Data }) {
  const [status, setStatus] = useState("completed");
  const [check, setCheck] = useState(true);

  const clickhandler = () => {
    if (check) {
      setStatus("pending");
      setCheck(false);
      return;
    } else {
      setStatus("completed");
      setCheck(true);
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>List</th>
            <th>Status</th>
            <th>Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Data}</td>
            <td>
              <button onClick={clickhandler}>{status}</button>
            </td>
            <td>
              <button>🗑️</button>
            </td>
          </tr>
        </tbody>
        {/* <tbody>
          arr.map((item,index) =>
          {
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.body}</td>
            </tr>
          }
          )
        </tbody> */}
      </table>
    </>
  );
}
