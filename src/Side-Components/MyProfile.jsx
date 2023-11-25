import React from "react";
import "./MyProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/mylogo3.png";

import myPicture from "../assets/myPic3.jpg";

function MyProfile() {
  return (
    <section className="myprofile-container">
      <figure className="myprofile">
        <div className="image-box">
          <img src={myPicture} alt="Tayo Quadri" className="mypic" />
        </div>
        <figcaption>Omotayo Quadri</figcaption>
        <h5 className="title">FullStack Developer</h5>
      </figure>

      <section className="contact-info">
        <div className="email">
          <div className="icon-box">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="info-text">
            <p>Email</p>
            <p>quadrimotayo@gmail.com</p>
          </div>
        </div>
        <div className="phone">
          <div className="icon-box">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="info-text">
            <p>Phone</p>
            <p>+440746607466</p>
          </div>
        </div>
        <div className="location">
          <div className="icon-box">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className="info-text">
            <p>Location</p>
            <p>Manchester</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="birthday"></div>
      </section>
    </section>
  );
}

export default MyProfile;
