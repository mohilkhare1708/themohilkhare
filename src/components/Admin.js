import React from "react";
import hero_pic from "../assets/images/hero_pic.jpg";

const bannerStyle = {
  background: "#161415 url(" + hero_pic + ")" + " no-repeat top center",
};

function Admin() {
  return (
    <header id="home" style={bannerStyle}>
      <div class="row banner">
        <div class="banner-text">
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
        </div>
      </div>
    </header>
  );
}

export default Admin;
