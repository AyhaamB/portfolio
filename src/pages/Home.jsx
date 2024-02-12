const Home = () => {
  return (
    <main>
      <div className="home flex-row justify-center">
        <div className="home-content">
          <div className="home-div" id="about">
            <p id="greeting">Hi,</p>
            <p id="name-intro">I'm Ayhaam Baksh</p>
            <p id="title">Full Stack Web Developer | Vaughan, ON</p>
            <p id="greeting">
              I'm a passionate web developer looking for new oppurtunites to
              grow and develop as a professional.
            </p>
            <button id="hire-me" className="btn btn-dark">
              Hire Me
            </button>
          </div>
          <div className="headshot-div"></div>
          <img
            className="headshot"
            src="/IMG_6650-removebg-preview.png"
          ></img>
        </div>
      </div>
    </main>
  );
};

export default Home;
