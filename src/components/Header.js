import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Scrolldown from "./Scrolldown";

function Header() {
  return (
    <header id="home">
      <Navbar />
      <Banner />
      <Scrolldown />
    </header>
  );
}

export default Header;
