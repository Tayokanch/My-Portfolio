import React from "react";
import "./Profile.css";
import Html from "../assets/html.png";
import Css from "../assets/Css.png";
import Js from "../assets/js.png";
import react from "../assets/react.png";
import Git from "../assets/git.png";

function Profile() {
  return (
    <main className="profile-main">
      <section>
        <h3>Profile</h3>
        <p>I am a Frontend Developer & an Aspiring Full Stack Developer</p>
      </section>

      <section>
        <div>
          <p>About me</p>
        </div>
        <p>
          I am Kazeem Omotayo Quadri, a dedicated software developer currently
          immersed in a transformative 6-month full-stack development boot camp
          at Boolean UK. This experience is pivotal for refining my coding
          proficiency and fostering a deep sense of confidence to tackle
          real-world challenges. Prior to embarking on this boot camp journey, I
          delved into self-taught learning and earned Meta Frontend Certificates
          in JavaScript, Version Control System (Git), HTML, and CSS. One aspect
          of Boolean UK that particularly resonates with me is its emphasis on
          pair programming. I recognize the value this collaborative approach
          adds to teamwork, a crucial skill in the software development field. I
          believe that honing my abilities in pair programming will
          significantly contribute to my performance within a team setting.
        </p>
      </section>
      <section>
        <div>
          <p>My Stacks</p>
        </div>
        <ul>
          <li>
            <img src={Js} alt="Js-Logo" />
            <figcaption>Javascript</figcaption>
          </li>
          <li>
            <img src={react} alt="React-Logo" />
            <figcaption>React</figcaption>
          </li>
          <li>
            <img src={Html} alt="Html-Logo" />
            <figcaption>Html</figcaption>
          </li>
          <li>
            <img src={Css} alt="Css-Logo" />
            <figcaption>Css</figcaption>
          </li>
          <li>
            <img src={Git} alt="Git-Logo" />
            <figcaption>Git</figcaption>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Profile;
