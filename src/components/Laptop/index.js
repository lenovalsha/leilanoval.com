import React from "react";

const Laptop = (props) => {
  return (
    <div className="laptop" data-aos="fade-down" data-aos-duration="2000">
      <div className="upper">
        <div
          className="inner"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </div>
      <div className="lower"></div>
    </div>
  );
};
export default Laptop;
