import React, { useState } from "react";
import AboutInfo from "../components/about-info";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const scrollableDiv = document.getElementById("scrollable-div");

    if (element && scrollableDiv) {
      scrollableDiv.scrollTop = element.offsetTop - scrollableDiv.offsetTop;
    }
  };

  return (
    <main>
      <div className="about flex-row justify-center">
        <div className="icon-container">
          <div className="icon-grid">
            <a
              title="HTML"
              href="#"
              onClick={() => scrollToSection("html-header")}
            >
              <img className="about-icon" src="/html-5.png" alt="HTML Icon" />
            </a>
            <a
              title="CSS"
              href="#"
              onClick={() => scrollToSection("css-header")}
            >
              <img className="about-icon" src="/css.svg" alt="CSS Icon" />
            </a>
            <a
              title="NodeJS"
              href="#"
              onClick={() => scrollToSection("node-header")}
            >
              <img
                className="about-icon"
                src="/icons8-nodejs-96.png"
                alt="Programming Icon"
              />
            </a>
            <a
              title="React"
              href="#"
              onClick={() => scrollToSection("react-header")}
            >
              <img
                className="about-icon"
                src="/icons8-react-100.png"
                alt="Programming Icon"
              />
            </a>
            <a
              title="SQL"
              href="#"
              onClick={() => scrollToSection("sql-header")}
            >
              <img
                className="about-icon"
                src="/4299956.png"
                alt="Programming Icon"
              />
            </a>
          </div>
          <div className="icon-grid">
            <a title="Javascript" href="#" onClick={() => scrollToSection("js-header")}>
              <img className="about-icon" src="/js.png" alt="JavaScript Icon" />
            </a>
            <a title="Object Oriented Programming" href="#" onClick={() => scrollToSection("oop-header")}>
              <img
                className="about-icon"
                src="/programming.png"
                alt="Programming Icon"
              />
            </a>
            <a title="ExpressJS" href="#" onClick={() => scrollToSection("express-header")}>
              <img
                className="about-icon"
                src="/icons8-express-js-100.png"
                alt="Programming Icon"
              />
            </a>
            <a title="MongoDB" href="#" onClick={() => scrollToSection("mongo-header")}>
              <img
                className="about-icon"
                src="/icons8-mongodb-96.png"
                alt="Programming Icon"
              />
            </a>
            <a title="MERN Stack" href="#" onClick={() => scrollToSection("mern-header")}>
              <img
                className="about-icon"
                src="/mern-stack-icon.png"
                alt="Programming Icon"
              />
            </a>
          </div>
        </div>
        <div className="icon-description">
          <AboutInfo />
        </div>
      </div>
    </main>
  );
};

export default About;
