import React from "react";

const PortfolioItem = (props) => {
  return (
    <div>
      <div class="columns portfolio-item">
        <div class="item-wrap">
          <a href={"#modal-" + props.id} title={props.name}>
            <img src={props.imgLink} alt={props.name} border="0" />
            <div class="link-icon">
              <i class="icon-plus"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
