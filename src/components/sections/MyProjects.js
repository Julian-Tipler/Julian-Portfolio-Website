import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const MyProjects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "What I've Made",
    paragraph:
      "The following are my favorite personal projects. Working on these has kept my skills sharp outside of work while allowing me to explore new technologies and ideas.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Save the Whales</h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Typescript, React, Firebase
                </div>
                <p className="feature-description">
                  Save the Whales is an Orca Whale research tool I made for
                  ***Chloe's company***. It allows researchers to build complex
                  whale pedigrees and record their statuses in the field.
                </p>
                <a
                  className="demo-button"
                  target="_blank"
                  href="https://save-the-whales-ee45b.web.app/pedigrees/NLHcwscw0OpP26ERfsR8"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a
                  target="_blank"
                  href="https://findyoursquad.herokuapp.com/#/"
                  rel="noopener noreferrer"
                >
                  {/* <Image
                    src={require("../../assets/images/accepting-members.gif")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  /> */}
                </a>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Coincase </h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React, Redux, Ruby on Rails
                </div>
                <p className="feature-description">
                  Coincase is a clone of the cryptocurrency trading site
                  Coinbase. Coincase allows users to track, buy and sell
                  cryptocurrencies.
                </p>
                <a
                  className="demo-button"
                  target="_blank"
                  href="https://coincase-juliantipler.herokuapp.com/#/"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a
                  target="_blank"
                  href="https://coincase-juliantipler.herokuapp.com/#/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={require("../../assets/images/coincase-demonstration.gif")}
                    alt="coincase-demonstration"
                    width={528}
                    height={396}
                  />
                </a>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">Find Your Squad</h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  MERN (MongoDB, Express, React, Nodejs)
                </div>
                <p className="feature-description">
                  FindYourSquad is a social platform for gamers that matches
                  teammates based on play style and skill. Through these
                  connections, gamers can communicate with one another, arrange
                  schedules, view each other's gaming profile, and deploy into
                  their favorite games together.
                </p>
                <a
                  className="demo-button"
                  target="_blank"
                  href="https://findyoursquad.herokuapp.com/#/"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a
                  target="_blank"
                  href="https://findyoursquad.herokuapp.com/#/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={require("../../assets/images/accepting-members.gif")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                </a>
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">BeatMachine</h3>
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Javascript
                </div>
                <p className="feature-description">
                  BeatMachine is a synthetic drum machine with programmable
                  patterns and effects.
                </p>
                <a
                  className="demo-button"
                  target="_blank"
                  href="https://julian-tipler.github.io/BeatMachine/"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <a
                  target="_blank"
                  href="https://julian-tipler.github.io/BeatMachine/"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={require("../../assets/images/BeatMachine.gif")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MyProjects.propTypes = propTypes;
MyProjects.defaultProps = defaultProps;

export default MyProjects;
