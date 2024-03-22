import React from "react";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
