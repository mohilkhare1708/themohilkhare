import React from "react";
import "../assets/css/default.css";
import "../assets/css/layout.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/media-queries.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      {/* <section id="contact">
        <div class="row section-head">
          <div class="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div class="ten columns">
            <p class="lead">
              I believe that working for an organisation is a commitment before
              obligations for money. Given the opportunity to deliver for any
              organisation, I make it my top priority to provide them the best I
              have to offer, no matter how big or small the task is. Looking
              forward to working with you.
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
      </section> */}
      <Footer />
    </div>
  );
}

export default Home;
