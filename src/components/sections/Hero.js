import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import profilePicture from "../../assets/images/profile-picture.jpg"

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="left-side">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Julian Tipler
              </h1>
              <h3>
                I learn fast and work hard
              </h3>
              <div className="container-xs">
                <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button
                      tag="a"
                      color="primary"
                      wideMobile
                      href="https://www.linkedin.com/in/julian-t-87a2a0a4/"
                    >
                      LinkedIn
                    </Button>
                    <Button
                      tag="a"
                      color="dark"
                      wideMobile
                      href="https://github.com/Julian-Tipler"
                    >
                      Github
                    </Button>
                  </ButtonGroup>
                </div>
              </div>

            </div>
            <img className="profile-picture" src={profilePicture} />
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          ></div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
