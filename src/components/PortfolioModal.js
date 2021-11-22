import React from "react";

const PortfolioModal = (props) => {
  return (
    <div id={"modal-" + props.id} class="popup-modal mfp-hide">
      <img class="scale-with-grid" src={props.imgLink} alt={props.name} />

      <div class="description-box">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <span class="categories">
          <i class="fa fa-tag"></i>
          {props.technologies}
        </span>
      </div>

      <div class="link-box">
        <a href={props.repoLink} target="_blank">
          Github Repo
        </a>
        <a class="popup-modal-dismiss">Close</a>
      </div>
    </div>
  );
};

export default PortfolioModal;
