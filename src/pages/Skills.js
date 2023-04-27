import React from "react";
import Skills from "../components/Skill";
import aos from "aos";

import "aos/dist/aos.css";

const Skill = () => {
  // this is needed for aos
  React.useEffect(() => {
    aos.init(3000);
  }, []);
  return (
    <div id="skill">
      <Skills />
    </div>
  );
};

export default Skill;
