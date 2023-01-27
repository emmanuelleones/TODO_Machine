import React from "react";
import "./Title.css";

const Title = (items) => {
  return (
  <React.Fragment>
    <span className={items.className}> {items.text} </span>
  </React.Fragment>
  )
};

export { Title };
