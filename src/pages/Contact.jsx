const Home = () => {
    return (
      <main>
        <div className="home flex-row justify-center align-center">
          <div className="home-content d-flex justify-center align-center">
            <div className="home-div" id="about">
              <p id="name-intro">Contact Me</p>
              <p id="greeting">
                ayh132@gmail.com
              </p>
              <p id="greeting">
                (416) 807-3054
              </p>
              <button id="hire-me" className="btn btn-dark">
                View Resume
              </button>
            </div>
            <div className="headshot-div"></div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Home;
  