// import "../css/homepage.css";
import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Signup from "./Signup";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Content />
      <Signup />
      <Footer />
    </div>
  );
}
