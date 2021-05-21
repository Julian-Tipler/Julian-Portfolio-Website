import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <footer className="footer">
        <a
          href="https://github.com/Julian-Tipler"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            target="_blank"
            rel="noopener noreferrer"
            className="fa-lg"
            icon={faGithub}
          ></FontAwesomeIcon>
          <p>Julian Tipler</p>
        </a>
        <a
          href="https://www.linkedin.com/in/julian-t-87a2a0a4/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            target="_blank"
            rel="noopener noreferrer"
            className="fa-lg"
            icon={faLinkedin}
          ></FontAwesomeIcon>
          <p>Julian Tipler</p>
        </a>
        <a className="social-link">
          <FontAwesomeIcon
            target="_blank"
            rel="noopener noreferrer"
            className="fa-lg"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <p>tipler.julian@gmail.com</p>
        </a>
      </footer>
    </div>
  );
};

export default FooterSocial;
