import React from "react";

const PortfolioItem = (props) => {
  return (
    <div>
      <div class="columns portfolio-item">
        <div class="item-wrap">
          <a href={props.repoLink} title={props.name} target="_blank" rel="noreferrer">
            <img src={props.imgLink} alt={props.name} border="0" />
            <div class="link-icon">
              <i class="icon-plus"></i>
            </div>
          </a>
        </div>
        <div class="link-box">
          <a href={props.repoLink} target="_blank" rel="noreferrer">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
