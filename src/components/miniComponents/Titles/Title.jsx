import React from "react";
import "./TitleStyles.css";

const Title = ({className, text}) => {
  return (
  <React.Fragment>
    <span className={className}> {text} </span>
  </React.Fragment>
  );
};

export { Title };
