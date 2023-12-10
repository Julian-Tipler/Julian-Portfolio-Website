import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-scroll";
import copy from "clipboard-copy";

export default function Navbar() {
  return (
    <nav className="navbar-class">
      <div className="navbar-links">
        <Link className="navButton" to="my-skills" smooth={true}>
          My skills
        </Link>
        <Link className="navButton" to="my-projects" smooth={true}>
          My projects
        </Link>
      </div>
      <div className="social-media-links">
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
            width={"10px"}
          ></FontAwesomeIcon>
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
            width={"10px"}
          ></FontAwesomeIcon>
        </a>
        <Link
          className="social-link navButton"
          onClick={() => {
            copy("tipler.julian@gmail.com");
            alert("Email copied to clipboard!");
          }}
          smooth={true}
        >
          <FontAwesomeIcon
            target="_blank"
            rel="noopener noreferrer"
            className="fa-lg"
            icon={faEnvelope}
            width={"10px"}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </nav>
  );
}
