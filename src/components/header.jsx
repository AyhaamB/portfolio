import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <div className="heading">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        
          <SocialIcon
            className="social-icons"
            url="https://github.com/AyhaamB"
            style={{ height: 25, width: 25 }}
          />
          <SocialIcon
            className="social-icons"
            url="https://linkedin.com"
            style={{ height: 25, width: 25 }}
          />
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
