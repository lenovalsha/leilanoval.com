import React, { useState } from "react";
import { entry } from "./entry";
import { FaTheRedYeti } from "react-icons/fa";
import { isElement } from "react-dom/test-utils";
import { imageStyle } from "../ProfileImage/style";
function Website(props) {
  const [isHover, setIsHover] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupImgSrc, setPopupImgSrc] = useState("");
  const MouseHover = () => {
    setIsHover(true);
  };

  const MouseLeave = () => {
    setIsHover(false);
  };

  const PopUpImage = () => {
    setShowPopup(true);
    setPopupImgSrc(props.img);
  };
  const Close = () => {
    setShowPopup(false);
  };

  const hoverStyle = {
    backgroundImage: `url(${props.img})`,
    opacity: isHover ? ".9" : "1",
  };

  const popupStyle = {
    display: showPopup ? "block" : "none",
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
        onClick={PopUpImage}
      >
        {isHover ? <div className="hover">{props.name}</div> : null}
      </div>
      {showPopup && (
        <div className="popup-image" style={popupStyle}>
          <span onClick={Close}>X</span>
          <img src={popupImgSrc} />
        </div>
      )}
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
