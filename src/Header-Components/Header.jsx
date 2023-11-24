import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [displayHeader, setDisplayHeader] = useState("Home");
  const storeHeader = localStorage.getItem("newHeader") || "";
  const navigate = useNavigate();

  const handleClick = (newHeader, path) => {
    setDisplayHeader(newHeader);
    localStorage.setItem("newHeader", newHeader);
    navigate(path);
  };

  useEffect(() => {
    setDisplayHeader(storeHeader);
  }, []);

  return (
    <>
      <h1>{displayHeader}</h1>
      <ul>
        <li onClick={() => handleClick("Home", "/")}>Home</li>
        <li onClick={() => handleClick("Profile", "/Aboutme")}>Profile</li>
        <li onClick={() => handleClick("Resume", "/Resume")}>Resume</li>
        <li onClick={() => handleClick("Portfolio", "/Portfolio")}>
          Portfolio
        </li>
        <li onClick={() => handleClick("Contact", "Contact")}>Contact</li>
      </ul>
    </>
  );
}

export default Header;
