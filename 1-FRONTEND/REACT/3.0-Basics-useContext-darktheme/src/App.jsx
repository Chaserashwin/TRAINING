import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";
import Content from "./components/Content";
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./store/Theme";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  // const darkClass = { themectx }.isDark ? "dark" : "";
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Navbar />
      <Content />
      <Form />
      <Display />
      <div className="text">It's a {isDark ? "Dark" : "light"} theme</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;

{
  /* <div className="{`app ${darkClass}`}"></div> */
}
