import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Display from "./components/Display";
import Content from "./components/Content";

import { useContext } from "react";
import ThemeContext from "./store/Themecontext";

const App = () => {
  const themectx = useContext(ThemeContext);

  const darkClass = { themectx }.isDark ? "dark" : "";
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
