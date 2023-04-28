import React from "react";
import Image from "./../components/ProfileImage";
import H1 from "./../components/H1";
import profile from "./../assets/profile/intro.png";

const Home = () => {
  return (
    <div className="home-container">
      <h1 class="name">Leila Noval</h1>

      <section className="intro">
        <Image img={profile} name="Leila Noval" />
        <div>
          <H1 content="Full Stack developer" />
          <p className="intro-paragraph">
            A passionate software developer who takes pleasure in creating
            programs
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
