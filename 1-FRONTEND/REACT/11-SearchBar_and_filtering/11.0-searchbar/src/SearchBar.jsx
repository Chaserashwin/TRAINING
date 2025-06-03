import React, { useState } from "react";
import { data } from "./utils/data";

function SearchBar() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <h2>SearchBar</h2>
      <div>
        <h1 className="text-center mt-4">Contact keeper</h1>
        <form>
          <input
            className="border-2 border-black my-3"
            type="search"
            placeholder="search title"
            name=""
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchBar;
