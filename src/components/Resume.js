import React from "react";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import PostitionsOfResponsibilities from "./PostitionsOfResponsibilities";
import Achievements from "./Achievements";

const Resume = () => {
  return (
    <div>
      <section id="resume">
        <Work />
        <Education />
        <PostitionsOfResponsibilities />
        <Achievements />
        <Skills />
      </section>
    </div>
  );
};

export default Resume;
