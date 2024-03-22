import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <NavLink to="/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
