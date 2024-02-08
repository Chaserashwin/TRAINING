import "./../style.css";
import { useContext } from "react";
import ThemeContext from "../themecontext";
export default function Header() {
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
      <button>Submit</button>
    </div>
  );
}

// function test() {
//   return <h3>Test</h3>;
// }

// export { test };
