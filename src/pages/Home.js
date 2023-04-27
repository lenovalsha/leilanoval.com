import React from "react";
import Image from "./../components/ProfileImage";
import H1 from "./../components/H1";
import Paragraph from "./../components/Paragraph";

const Home = () => {
  return (
    <div className="container">
      <h1 className="name">Leila Noval</h1>
      <section className="flex-row vertical-center">
        <Image />
        <div>
          <H1 />
          <Paragraph />
        </div>
      </section>
    </div>
  );
};

export default Home;
