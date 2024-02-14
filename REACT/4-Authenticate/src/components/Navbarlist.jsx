import "../css/navbarlist.css";
// import { useContext } from "react";
// import ThemeContext from "../store/Themecontext";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const themectx = useContext(ThemeContext);

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={"/homepage"}>Home</Link>
        </li>
        <li>
          <Link to={"/homepage/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/homepage/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link to={"/homepage/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/homepage/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/homepage/Signup"}>SignUp</Link>
        </li>
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

{
  /* <li></li>
  <li></li>
  <li>Contact</li> */
}
