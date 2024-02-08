import React, { useContext } from "react";
import ThemeContext from "./store/Themecontext";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";

const App = () => {
  const themeCtx = useContext(ThemeContext);

  const darkClass = themeCtx.isDark ? "dark" : "";

  return (
    <div className="{`app ${darkClass}`}">
      <Navbar />
      <Form />
      <Display />
    </div>
  );
};

export default App;
