import React from "react";
import "../../css/Maincss/Table.css";

export default function Table(props) {
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
