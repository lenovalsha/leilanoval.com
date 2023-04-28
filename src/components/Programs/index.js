import { useState } from "react";
import projectEntry from "./entry";

function CreateProjectComponent(e, index) {
  const [isShow, setIsShow] = useState(false);

  const Show = () => {
    setIsShow(!isShow);
  };

  const showStyle = {
    display: isShow ? "block" : "none",
  };

  const imageGallery = e.images.map((item, index) => {
    return (
      <div
        className="image"
        key={index}
        style={{ backgroundImage: `url(${item})` }}
      />
    );
  });
  if (index % 2 === 0) {
    // for even indexes, render the gallery on the left
    return (
      <div className="project">
        <div data-aos="fade-right" data-aos-duration="2000" className="gallery">
          {imageGallery}
        </div>
        <div className="project-info">
          <h3>{e.name}</h3>
          <span onClick={Show}>>></span>
          <div className="show-more" style={showStyle}>
            <ul className="skill-list">
              {e.skill.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="info-list">
              {e.info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a href={e.git}>View in Github</a>
          </div>
        </div>
      </div>
    );
  } else {
    // for odd indexes, render the gallery on the right
    return (
      <div className="project">
        <div className="project-info">
          <h3>{e.name}</h3>
          <span onClick={Show}>>></span>
          <div className="show-more" style={showStyle}>
            <ul className="skill-list">
              {e.skill.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <ul className="info-list">
              {e.info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a href={e.git}>View in Github</a>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="gallery">
          {imageGallery}
        </div>
      </div>
    );
  }
}
export default function Projects() {
  return <div id="project">{projectEntry.map(CreateProjectComponent)}</div>;
}