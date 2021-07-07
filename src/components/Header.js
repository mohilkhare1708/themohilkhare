import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Scrolldown from "./Scrolldown";
import hero_pic from "../assets/images/hero_pic.jpg";

const headerStyle = {
  background: '#161415 url(' + hero_pic + ')' + ' no-repeat top center'
};

function Header() {
  return (
    <header id="home" style={headerStyle}>
      <Navbar />
      <Banner />
      <Scrolldown />
    </header>
  );
}

export default Header;
