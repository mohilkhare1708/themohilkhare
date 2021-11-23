import React from "react";

const TestimonialItem = (props) => {
  return [
    <li>
      <blockquote>
        <p>{props.message}</p>
        <cite>{props.from}</cite>
      </blockquote>
    </li>,
  ];
};

export default TestimonialItem;
