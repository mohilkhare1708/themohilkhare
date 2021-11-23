import React from "react";
import mohil_khare_resume from "../assets/Mohil_Khare_Resume.pdf";

function DownloadResume() {
  return (
    <div>
      <div class="columns download">
        <p>
          <a href={mohil_khare_resume} class="button">
            <i class="fa fa-download"></i>Download Resume
          </a>
        </p>
      </div>
      <div class="columns download">
        <p>
          <a
            href="mailto:mohilkhare17@gmail.com?subject=Hey Mohil!"
            class="button"
          >
            <i class="fa fa-envelope"></i>Send me a mail!
          </a>
        </p>
      </div>
    </div>
  );
}

export default DownloadResume;
