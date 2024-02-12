import React, { useState } from "react";

const Projects = () => {
  return (
    <main>
      <div className="projects flex-row justify-center">
        <div className="project-showcase">
          <h1 className="projects-heading">Projects</h1>
          <a href="https://phvania.github.io/finance-update-app/">
            <div className="project-div">
              <div className="project-image" id="finance-pal-image"></div>
              <div className="project-info">
                <h2 className="project-name">Finance Pal</h2>
                <p className="project-desc">A front end application where users can search for business related news stories and stay up to date with stock prices by searching for their favourite stocks.</p>
              </div>
            </div>
          </a>
          <a href="https://ayhaamb.github.io/weather-app/">
            <div className="project-div">
              <div className="project-image" id="weather-app-image"></div>
              <div className="project-info">
              <h2 className="project-name">Weather App</h2>
              <p className="project-desc">A front end application where users can search for cities to get up to date weather information as well as an extended forecast.</p>
              <a>Link to github repository</a>
              </div>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/1UV1N5O8wT5SjiMVjIemWGW4AODXwCUHt/view">
            <div className="project-div">
              <div className="project-image" id="ecom-backend-image"></div>
              <div className="project-info">
              <h2 className="project-name">Ecommerce Backend</h2>
              <p className="project-desc">A backend used to store information about various products for an ecommerce application.</p>
              </div>

            </div>
          </a>
          <a href="https://sportstash-6f44bb76cc11.herokuapp.com/">
            <div className="project-div">
              <div className="project-image" id="sportstash-image"></div>
              <div className="project-info">
              <h2 className="project-name">Sport Stash</h2>
              <p className="project-desc">A full stack ecommerce web application. Where users can browse through various products as well as sign in to add item to their cart. This was a collaborative project with GitHub used as the version control.</p>
              </div>
            </div>
          </a>
          <a>
            <div className="project-div">
              <div className="project-image" id="circuit-chasers"></div>
              <div className="project-info">
              <h2 className="project-name">Circuit Chasers</h2>
              <p className="project-desc">A front end application where users can search for business related news stories and stay up to date with stock prices by searching for their favourite stocks.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
