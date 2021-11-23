import React from "react";
import mohil_khare_resume from "../assets/Mohil_Khare_Resume.pdf";

function DownloadResume() {
  return (
    <div class="columns download">
      <p>
        <a href={mohil_khare_resume} class="button">
          <i class="fa fa-download"></i>Download Resume
        </a>
      </p>
    </div>
  );
}

export default DownloadResume;
