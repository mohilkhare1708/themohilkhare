import React from "react";

function Navbar() {
  return (
    <nav id="nav-wrap">
      <a class="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      <a class="mobile-btn" href="#/" title="Hide navigation">
        Hide navigation
      </a>

      <ul id="nav" class="nav">
        <li class="current">
          <a class="smoothscroll" href="#home">
            Home
          </a>
        </li>
        <li>
          <a class="smoothscroll" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="smoothscroll" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a class="smoothscroll" href="#portfolio">
            Works
          </a>
        </li>
        <li>
          <a class="smoothscroll" href="#testimonials">
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
