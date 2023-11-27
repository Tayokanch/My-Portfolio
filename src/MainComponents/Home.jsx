import React from "react";
import { useState } from "react";
import "./Home.css";
import Imagebg from "../assets/programbg3.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Git from "../assets/git.png";
import Linkedin from "../assets/linkedin.png";
import MainBg from "../assets/mainbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [clickHireMe, setClickHireMe] = useState(false);
  const deleteHireMe = () => {
    setClickHireMe(true);
  };

  return (
    <main className="about-main">
      <section>
        <p>
          Hello and welcome! <span>👋</span> Feel free to explore my portfolio
          by navigating through the navbar. I hope you enjoy the content!
        </p>
        <div className="logos-container">
          <p id="media"> SOCIAL MEDIA:</p>
          <div className="logos">
            <img src={Git}></img>
            <img src={Linkedin}></img>
            <img src={Twitter}></img>
            <img src={Instagram}></img>
          </div>
        </div>

        <div className="contact">
          <p>Contact me @</p>
          <div>
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            <p>quadrimotayo@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon className="contact-icon" icon={faPhone} />
            <p>+447466072016</p>
          </div>
        </div>
      </section>
      <section>
        <img src={Imagebg} alt="Image" />
      </section>
      <strong
        className={`hire-me ${clickHireMe ? "delete-hire-me" : ""}`}
        onClick={deleteHireMe}
      >
        Hire me!
      </strong>
    </main>
  );
}

export default Home;
