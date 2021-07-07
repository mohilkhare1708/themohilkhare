import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./assets/css/App.css";
import "./assets/css/default.css";
import "./assets/css/layout.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/media-queries.css";
import ExperienceItem from "./components/ExperienceItem";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <section id="resume">
        <div class="row education">
          <div class="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div class="nine columns main-col">
            <ExperienceItem
              orguni="Hey"
              courserole="heyy"
              date="yoo"
              desc="yikes"
            />
          </div>
        </div>

        <div class="row work">
          <div class="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div class="nine columns main-col">
            <div class="row item">
              <div class="twelve columns">
                <h3>Awesome Design Studio</h3>
                <p class="info">
                  Senior UX Designer <span>&bull;</span>{" "}
                  <em class="date">March 2010 - Present</em>
                </p>
                <p>Demo Text</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row skill">
          <div class="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div class="nine columns main-col">
            <p>Skill Info</p>

            <div class="bars">
              <ul class="skills">
                <li>
                  <span class="bar-expand photoshop"></span>
                  <em>Photoshop</em>
                </li>
                <li>
                  <span class="bar-expand illustrator"></span>
                  <em>Illustrator</em>
                </li>
                <li>
                  <span class="bar-expand wordpress"></span>
                  <em>Wordpress</em>
                </li>
                <li>
                  <span class="bar-expand css"></span>
                  <em>CSS</em>
                </li>
                <li>
                  <span class="bar-expand html5"></span>
                  <em>HTML5</em>
                </li>
                <li>
                  <span class="bar-expand jquery"></span>
                  <em>jQuery</em>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div class="row">
          <div class="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              class="bgrid-quarters s-bgrid-thirds cf"
            >
              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="" src="images/portfolio/coffee.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Coffee</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-02" title="">
                    <img alt="" src="images/portfolio/console.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Console</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-03" title="">
                    <img alt="" src="images/portfolio/judah.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Judah</h5>
                        <p>Webdesign</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-04" title="">
                    <img alt="" src="images/portfolio/into-the-light.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Into The Light</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-05" title="">
                    <img alt="" src="images/portfolio/farmerboy.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Farmer Boy</h5>
                        <p>Branding</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-06" title="">
                    <img alt="" src="images/portfolio/girl.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Girl</h5>
                        <p>Photography</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-07" title="">
                    <img alt="" src="images/portfolio/origami.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Origami</h5>
                        <p>Illustrration</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>

              <div class="columns portfolio-item">
                <div class="item-wrap">
                  <a href="#modal-08" title="">
                    <img alt="" src="images/portfolio/retrocam.jpg" />
                    <div class="overlay">
                      <div class="portfolio-item-meta">
                        <h5>Retrocam</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div class="link-icon">
                      <i class="icon-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="modal-01" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-coffee.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Coffee Cup</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-02" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-console.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Console</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Web Development
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-03" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-judah.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Judah</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-04" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-intothelight.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Into the Light</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-05" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-farmerboy.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Farmer Boy</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-06" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-girl.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Girl</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-07" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-origami.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Origami</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Illustration
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-08" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-retrocam.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Retrocam</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Webdesign, Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div>
      </section>
      <section id="call-to-action">
        <div class="row">
          <div class="two columns header-col">
            <h1>
              <span>Get Hosting.</span>
            </h1>
          </div>

          <div class="seven columns">
            <h2>
              <span class="lead">Unde Omnis Iste</span>
            </h2>
            <p>
              <span class="lead">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae.{" "}
              </span>
            </p>
          </div>

          <div class="three columns action"></div>
        </div>
      </section>
      <section id="testimonials">
        <div class="text-container">
          <div class="row">
            <div class="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div class="ten columns flex-container">
              <div class="flexslider">
                <ul class="slides">
                  <li>
                    <blockquote>
                      <p>
                        Your work is going to fill a large part of your life,
                        and the only way to be truly satisfied is to do what you
                        believe is great work. And the only way to do great work
                        is to love what you do. If you haven't found it yet,
                        keep looking. Don't settle. As with all matters of the
                        heart, you'll know when you find it.
                      </p>
                      <cite>Steve Jobs</cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                        This is Photoshop's version of Lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                        odio sit amet nibh vulputate cursus a sit amet mauris.
                      </p>
                      <cite>Mr. Adobe</cite>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div class="row section-head">
          <div class="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div class="ten columns">
            <p class="lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label for="contactName">
                    Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactName"
                    name="contactName"
                  />
                </div>

                <div>
                  <label for="contactEmail">
                    Email <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                  />
                </div>

                <div>
                  <label for="contactSubject">Subject</label>
                  <input
                    type="text"
                    value=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                  />
                </div>

                <div>
                  <label for="contactMessage">
                    Message <span class="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                  ></textarea>
                </div>

                <div>
                  <button class="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i class="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside class="four columns footer-widgets">
            <div class="widget widget_contact">
              <h4>Address and Phone</h4>
              <p class="address">
                Jonathan Doe
                <br />
                1600 Amphitheatre Parkway <br />
                Mountain View, CA 94043 US
                <br />
                <span>(123) 456-7890</span>
              </p>
            </div>

            <div class="widget widget_tweets">
              <h4 class="widget-title">Latest Tweets</h4>

              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">2 Days Ago</a>
                  </b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b>
                    <a href="#">3 Days Ago</a>
                  </b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <footer>
        <div class="row">
          <div class="twelve columns">
            <ul class="social-links">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-skype"></i>
                </a>
              </li>
            </ul>

            <ul class="copyright">
              <li>&copy; Copyright 2014 CeeVee</li>
              <li>
                Design by{" "}
                <a
                  href="http://www.styleshout.com/"
                  title="Styleshout"
                  target="_blank"
                >
                  Styleshout
                </a>
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
    </div>
  );
}

export default App;
