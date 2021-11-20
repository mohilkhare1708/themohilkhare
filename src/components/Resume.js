import React from "react";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div>
      <section id="resume">
        <Work />
        <Education />
        <Skills />
      </section>
    </div>
  );
};

export default Resume;
