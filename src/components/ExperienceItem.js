import React from "react";

const style = {
  textAlign : 'left'
};

function ExperienceItem(props) {
  return (
    <div class="row item" style={style}>
      <div class="twelve columns">
        <h3>{props.orguni}</h3>
        <p class="info">
          {props.courserole} <span>&bull;</span>{" "}
          <em class="date">{props.date}</em>
        </p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default ExperienceItem;
