import React from "react";
import { imageStyle } from "./style";

const Image = (props) => {
  return <img style={imageStyle} src={props.img} />;
};

export default Image;
