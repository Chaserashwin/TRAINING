import "../css/Navbar.css";
import { useContext } from "react";
import ThemeContext from "../store/Themecontext";

const Navbar = () => {
  const themectx = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>Header</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button onClick={themectx.themeToggle} href="#">
        Dark Mode
      </button>
    </div>
  );
};

export default Navbar;
