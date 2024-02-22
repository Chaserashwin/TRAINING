import "../css/Navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../store/Theme";

const Navbar = () => {
  // const themectx = useContext(ThemeContext);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>Header</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
};

export default Navbar;
