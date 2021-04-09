import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  console.log(children);
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
