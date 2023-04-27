import React, { useState } from "react";
import { entry } from "./entry";
import { FaTheRedYeti } from "react-icons/fa";
import { isElement } from "react-dom/test-utils";
import { imageStyle } from "../ProfileImage/style";
function Website(props) {
  const [isHover, setIsHover] = useState(false);
  const [isImageEnlarge, setIsImageEnlarge] = useState(false);

  const MouseHover = () => {
    setIsHover(true);
  };

  const MouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setIsImageEnlarge(!isImageEnlarge);
  };

  const hoverStyle = {
    backgroundImage: `url(${props.img})`,
    opacity: isHover ? ".9" : "1",
  };

  const style = {
    opacity: ".9",
    color: isImageEnlarge ? "pink" : "yellow",

    top: 0,
    left: 0,
    zIndex: 99,
  };
  const imageStyle = {
    display: "block",
    position: "absolute",
    backgroundImage: `url(${props.img})`,
    top: "1000px",
    left: 0,
  };

  return (
    <>
      <div
        className="website"
        onMouseOver={MouseHover}
        onMouseLeave={MouseLeave}
        style={hoverStyle}
        data-aos="flip-up"
        data-aos-duration="2000"
      >
        {isHover ? (
          <div style={style} onClick={handleClick}>
            {props.name}
          </div>
        ) : null}
      </div>
    </>
  );
}

function createWebsiteComponent(e) {
  return <Website img={e.img} key={e.id} name={e.name} />;
}

const index = () => {
  return (
    <>
      <div className="website-container">
        {entry.map(createWebsiteComponent)}
      </div>
    </>
  );
};

export default index;
