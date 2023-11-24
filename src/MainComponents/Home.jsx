import React from "react";
import { useState } from "react";
import "./Home.css";
import Imagebg from "../assets/programbg3.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Git from "../assets/git.png";
import Linkedin from "../assets/linkedin.png";

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

        <div className="logos">
          <img src={Git}></img>
          <img src={Linkedin}></img>
          <img src={Twitter}></img>
          <img src={Instagram}></img>
        </div>
      </section>
      <section>
        <img src={Imagebg} alt="Image" />
      </section>
      <strong
        className={`hire-me ${clickHireMe ? 'delete-hire-me' : ""}`}
        onClick={deleteHireMe}
      >
        Hire me!
      </strong>
    </main>
  );
}

export default Home;
