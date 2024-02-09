import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nopage from "./components/Nopage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Nopage />} />
        {/* <Route path="/Signup" element = {<Login/>} */}
      </Routes>
    </BrowserRouter>
  );
}
