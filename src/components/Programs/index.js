import { useState } from "react";
import projectEntry from "./entry";
import Laptop from "../Laptop";

function CreateProjectComponent(e, index) {
  const [isShow, setIsShow] = useState(false);

  const Show = () => {
    setIsShow(!isShow);
  };

  const showStyle = {
    display: isShow ? "block" : "none",
  };

  if (index % 2 === 0) {
    // for even indexes, render the gallery on the left
    return (
      <div className="project" key={e.id}>
        <Laptop img={e.image} />
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
      <div className="project reverse" key={e.id}>
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
        <Laptop img={e.image} />
      </div>
    );
  }
}
export default function Projects() {
  return <div id="project">{projectEntry.map(CreateProjectComponent)}</div>;
}
