import React from "react";
import "./Profile.css";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import react from "../assets/react.png";
import Git from "../assets/git.png";
import Node from "../assets/node.png";

function Profile() {
  return (
    <main className="profile-main">
      <section>
        <h3>Profile</h3>
        <p> Junior Software Developer</p>
      </section>

      <section>
        <div>
          <p>About me</p>
        </div>
        <p>
          I am Omotayo Quadri, a software developer currently enrolled in a
          6-month full-stack development boot camp at Boolean UK. This program
          is refining my coding skills and instilling confidence to address
          real-world challenges. With prior self-taught learning and Meta
          Frontend Certificates, I've further delved into frontend technologies
          such as HTML, CSS, JavaScript, and React during the boot camp.
          Proficient in client-side API interactions, HTTP requests, and
          authentication, I've also been introduced to Express.js for server
          development and leveraged SQL and Prisma for efficient database
          management on the backend. This immersive experience has equipped me
          with a robust skill set for professional software development.
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
          <li>
            <img src={Node} alt="Git-Logo" />
            <figcaption>Node</figcaption>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Profile;
