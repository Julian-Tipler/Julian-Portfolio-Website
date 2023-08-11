import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import profilePicture from "../../assets/images/profile-picture.jpg";

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
      <div className="container">
        <div className={innerClasses}>
          {/* left */}
          <div className="left-side">
            <img
              alt="profile"
              className="profile-picture reveal-from-bottom"
              src={profilePicture}
            />
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Julian Tipler
            </h1>
          </div>
          {/* right */}
          <div className="right-side">
            <div className="hero-qoute-content reveal-from-right">
              <p className="hero-qoute">
                "Julian was great at troubleshooting any bugs in our code, was
                always available, and was the main facilitator of our strategic
                planning discussions. He was a pleasure to work with and I would
                10/10 recommend him to any organization looking for a software
                engineer to add to their team."
              </p>
              <p className="person-name">-Niko Wells</p>
            </div>
            <div className="hero-qoute-content reveal-from-right">
              <p className="hero-qoute">
                "You took such ownership of building out Points API
                functionality (a MAJOR dependency of building new Incentives).
                You saw that epic through from beginning to end, grinding and
                problem solving and getting it done. ... The day we could
                successfully claim an Incentive and it resulted in points for
                the user, I thought "Right, of course this works. Julian nailed
                it." I have to remember and worry about so many things (too
                many) as a PM, and I can't tell you what a huge gift it is to
                get to forget. Keep up the awesome work."
              </p>
              <p className="person-name">-Alyssa Venere Braun</p>
            </div>
            {/* <div
              style={{ alignItems: "flex-start" }}
              className="hero-qoute-content reveal-from-right"
            >
              <p className="hero-qoute">Years of programming experience: 4</p>
              <p className="hero-qoute">Years of industry experience: 2</p>
            </div> */}
          </div>
          {/* <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          ></div> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
