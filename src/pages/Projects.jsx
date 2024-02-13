import React, { useState } from "react";

const Projects = () => {
  return (
    <main className="fade-inn">
      <div className="project-main">
        <div className="project-showcase">
          <a className="project-link" href="http://www.stonelinxlogistics.com/">
            <div className="project-div inverted-4">
              <div className="image-holder">
                <img
                  src="/mountain.png"
                  className="project-image"
                  id="finance-app-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">StoneLinx</h2>
                <p className="project-desc">
                  A full stack showcase website for a logistics company. Built
                  using the MERN stack and deployed using Heroku and a custom
                  domain.
                </p>
              </div>
            </div>
          </a>
          <a
            id="finance-pal-image"
            className="project-link"
            href="https://phvania.github.io/finance-update-app/"
          >
            <div className="project-div inverted-4">
              <div className="image-holder">
                <img
                  src="/money.png"
                  className="project-image"
                  id="finance-app-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">Finance Pal</h2>
                <p className="project-desc">
                  A front end application. Users can search for business related
                  news and keep track of stock prices by searching for their
                  favourite stocks. This was a collaborative project with GitHub
                  used as the version control.
                </p>
              </div>
            </div>
          </a>
          <a
            className="project-link"
            href="https://ayhaamb.github.io/weather-app/"
          >
            <div className="project-div inverted-4">
              <div className="image-holder">
                <img
                  src="/rain.png"
                  className="project-image"
                  id="weather-app-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">Weather App</h2>
                <p className="project-desc">
                  A front end application where users can search for cities to
                  get up to date weather information as well as an extended
                  forecast.
                </p>
              </div>
            </div>
          </a>
          <a
            className="project-link"
            href="https://drive.google.com/file/d/1UV1N5O8wT5SjiMVjIemWGW4AODXwCUHt/view"
          >
            <div className="project-div inverted-4">
              <div className="image-holder">
                <img
                  src="/backend.png"
                  className="project-image"
                  id="ecom-backend-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">Ecom Backend</h2>
                <p className="project-desc">
                  A backend used to store information about various products for
                  an ecommerce application. Created using MySql and showcased in
                  Insomnia.
                </p>
              </div>
            </div>
          </a>
          <a
            className="project-link"
            href="https://sportstash-6f44bb76cc11.herokuapp.com/"
          >
            <div className="project-div inverted-4">
              <div className="image-holder">
                <img
                  src="/soccer.png"
                  className="project-image"
                  id="sportstash-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">Sport Stash</h2>
                <p className="project-desc">
                  A full stack ecommerce web app. Users can browse various
                  products and sign in to add items to their cart. This was a
                  collaborative project with GitHub used as the version control.
                </p>
              </div>
            </div>
          </a>
          <a className="project-link">
            <div className="project-div inverted-4">
            <div className="image-holder">
                <img
                  src="/circuit.png"
                  className="project-image"
                  id="sportstash-image"
                ></img>
              </div>
              <div className="project-info">
                <h2 className="project-name">Circuit Chasers</h2>
                <p className="project-desc">
                  A front end application where users can search for business
                  related news stories and stay up to date with stock prices by
                  searching for their favourite stocks.
                </p>
              </div>
            </div>
          </a>
          <a className="project-link">
            <div className="project-div inverted-4">
              <div className="project-image" id="circuit-chasers"></div>
              <div className="project-info">
                <h2 className="project-name">Circuit Chasers</h2>
                <p className="project-desc">
                  A front end application where users can search for business
                  related news stories and stay up to date with stock prices by
                  searching for their favourite stocks.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Projects;
