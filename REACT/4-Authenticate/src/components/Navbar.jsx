import "../css/header.css";
// import { useContext } from "react";
// import ThemeContext from "../store/Themecontext";
export default function Navbar() {
  //   const themectx = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>Header</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      {/* <button onClick={themectx.themeToggle} className="btn" href="#">
        Dark Mode
      </button> */}
    </div>
  );
}

// function test() {
//   return <h3>Test</h3>;
// }

// export { test };
