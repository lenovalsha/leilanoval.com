import projectEntry from "./entry";

function createProjectComponent(e, index) {
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
          <h1>{e.name}</h1>
          <ul className="info-list">
            {e.info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    // for odd indexes, render the gallery on the right
    return (
      <div className="project">
        <div className="project-info">
          <h1>{e.name}</h1>
          <ul className="info-list">
            {e.info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="gallery">
          {imageGallery}
        </div>
      </div>
    );
  }
}
export default function Projects() {
  return <div id="project">{projectEntry.map(createProjectComponent)}</div>;
}
