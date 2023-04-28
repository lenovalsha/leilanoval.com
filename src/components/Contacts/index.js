import React from "react";
import entry from "./entry";
import { FaDiscourse } from "react-icons/fa";
function Socials(props) {
  return (
    <div className="social">
      <div>{props.icon}</div>
      <a href={props.url}>{props.social}</a>{" "}
    </div>
  );
}

function createSocials(e) {
  return <Socials key={e.id} social={e.social} icon={e.icon} url={e.url} />;
}
function Contacts() {
  return (
    <div className="block">
      <div className="contact">
        <h2>Lets Connect! {<FaDiscourse />}</h2>
        <p>
          Please feel free to contact me if you need any further information.
        </p>
      </div>
      <div className="contact-container">{entry.map(createSocials)}</div>
    </div>
  );
}
export default Contacts;
