import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "../css/homepage.css";

export default function Homepage() {
  return (
    <div className="home">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
