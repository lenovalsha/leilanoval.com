import React from "react";
import ProfileImage from "../components/ProfileImage";
import profile from "../assets/profile/profile.png";
const About = () => {
  return (
    <div id="about">
      <h1>About me</h1>
      <div className="about-container">
        <ProfileImage img={profile} />
        <div>
          <p>
            I completed my Information Technology diploma with a specialization
            in internet and software development from Medicine Hat College.
            Through this program, I have developed numerous programs utilizing
            various skills and frameworks. During my study, I was given the
            oppurtunity to work with some amazing programmers, my colleagues,
            they were my inspiration to continuously improve my abilities. Apart
            from coding, I enjoy exploring nature through hiking and camping, as
            well as staying active through gym workouts and discovering new
            restaurants. My objective is to consistently learn and grow within
            the technology industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
