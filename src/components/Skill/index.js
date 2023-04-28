import skillEntry from "./entry";
import { FaBrain, FaLaptop } from "react-icons/fa";
import "aos/dist/aos.css";

function Skill(props) {
  return (
    <div data-aos="fade-left" data-aos-duration="2000" key={props.id}>
      <div data-aos="fade-left" data-aos-duration="1000">
        {props.icon}
      </div>
      {props.skill}
    </div>
  );
}

function createSkillComponent(e) {
  return <Skill skill={e.skill} icon={e.icon} id={e.id} />;
}
export default function Skills() {
  return (
    <div className="container">
      <div>
        <h2 data-aos="fade-right" data-aos-duration="2000">
          Skills {<FaBrain />}
        </h2>
        <p>Always growing and learning</p>
        <div className="skill-container">
          {skillEntry.map(createSkillComponent)}
        </div>
      </div>
    </div>
  );
}
