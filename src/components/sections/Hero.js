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
        <div
          className={innerClasses}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
            height: "80vh",
          }}
        >
          <div style={{ flex: 1 }}>
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
          <div className="hero-qoute-content" style={{ flex: 2 }}>
            <div className="left-side">
              <p className="hero-qoute">
                "Julian was great at troubleshooting any bugs in our code, was
                always available, and was the main facilitator of our strategic
                planning discussions. He was a pleasure to work with and I would
                10/10 recommend him to any organization looking for a software
                engineer to add to their team. " -Niko Wells
              </p>
            </div>
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
