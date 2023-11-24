import { useState } from "react";
import { useNavigate } from "react";
import { Routes, Route } from "react-router-dom";
import MyProfile from "./Side-Components/MyProfile";
import Header from "./Header-Components/Header";
import Profile from "./MainComponents/Profile";
import Contact from "./MainComponents/Contact";

import Portfolio from "./MainComponents/Portfolio";
import Resume from "./MainComponents/Resume";
import Home from "./MainComponents/Home";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <aside>
        <MyProfile />
      </aside>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutMe" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
