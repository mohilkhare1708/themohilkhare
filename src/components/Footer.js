import React from "react";

function Footer() {
  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            <li>
              <a href="https://github.com/mohilkhare1708" target="_blank" rel="noreferrer">
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohil-khare/"
                target="_blank" rel="noreferrer"
              >
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

          <ul class="copyright">
            <li>
              Thanks for reaching this far, feel free to reach me out through
              any of my social media handles!
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#home">
            <i class="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
