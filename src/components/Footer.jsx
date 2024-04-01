import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../css/Footer.css"; // Import your custom CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <a
          href="https://github.com/unicorn453"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/kirila-r"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:kira.ruseva@gmail.com" className="social-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
