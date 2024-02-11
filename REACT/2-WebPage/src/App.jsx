import React, { useContext } from "react";
import ThemeContext from "./store/Themecontext";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";
import Content from "./components/Content";
import "./index.css";

const App = () => {
  const themeCtx = useContext(ThemeContext);

  // const darkClass = themeCtx.isDark ? "dark" : "";
  console.log(themeCtx);
  return (
    <div className="{`app ${darkClass}`}">
      <Navbar />
      <Content />
      <Form />
      <Display />
    </div>
  );
};

export default App;
