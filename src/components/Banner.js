import React from "react";

function Banner() {
  return (
    <div class="row banner">
      <div class="banner-text">
        <h1 class="responsive-headline">I'm Mohil Khare.</h1>
        <h3>
          I'm a Mumbai based <span>software developer</span>,{" "}
          <span>competitive programmer</span> and <span>tech writer</span>. My
          fascination about the power of computers is unending and I create
          things that reciprocate that. Let's{" "}
          <a class="smoothscroll" href="#about">
            start scrolling{" "}
          </a>
          and learn more{" "}
          <a class="smoothscroll" href="#about">
            about me
          </a>
          .
        </h3>
        <hr />
        <ul class="social">
          <li>
            <a href="https://github.com/mohilkhare1708" target="_blank" rel="noreferrer">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohil-khare/" target="_blank" rel="noreferrer">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/imohilkhare" target="_blank" rel="noreferrer">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mohil.khare/?hl=en"
              target="_blank" rel="noreferrer"
            >
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
