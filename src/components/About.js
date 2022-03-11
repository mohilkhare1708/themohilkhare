import React from "react";
import Contact from "./Contact";
import DownloadResume from "./DownloadResume";
import mohilkhare_cropped from "../assets/images/mohilkhare_cropped.jpg";

function About() {
  return (
    <section id="about">
      <div class="row">
        <div class="three columns">
          <img class="profile-pic" src={mohilkhare_cropped} alt="" />
        </div>
        <div class="nine columns main-col">
          <h2>About Me</h2>
          <p>
            Goal oriented, inquisitive computer science enthusiast. I keep keen
            interest in data science and plan to enter this field as I complete
            my formal education. I am also a 4-star coder on Codechef, which I
            mainly do to keep my DSA intact. I am currently trying to expand my
            knowledge base by doing online certifications from Coursera and
            Udemy to get ready for implementing the problem statements that can
            create a difference. Scroll ahead to know more abut me.
          </p>
          <div class="row">
            <Contact />
            <DownloadResume />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
