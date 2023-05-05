import React from "react";
import { imageStyle } from "./style";

const ProfileImage = (props) => {
  return (
    <img
      className="intro-img"
      style={imageStyle}
      src={props.img}
      alt={props.name}
    />
  );
};

export default ProfileImage;
