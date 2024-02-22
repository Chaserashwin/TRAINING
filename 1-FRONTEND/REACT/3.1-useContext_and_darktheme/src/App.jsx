import React, { useContext } from "react";
import { ThemeContext } from "./store/Theme.jsx";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <div className="text">It's a {isDark ? "Dark" : "light"} theme</div>
      App
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
