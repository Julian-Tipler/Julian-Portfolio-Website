import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Skill from "../elements/Skill";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const MySkills = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "What I know",
    paragraph:
      "At App Academy I learned a variety of languages and libraries and delved deep into each of them. I know have the skills and experience to write user-friendly full stack applications",
  };

  const skills = {
    Javascript: {
      name: "Javascript",
      icon: "devicon-javascript-plain colored",
    },
    React: { name: "React", icon: "devicon-react-plain colored" },
    Ruby: { name: "Ruby", icon: "devicon-ruby-plain colored" },
    Redux: { name: "Redux", icon: "devicon-redux-plain colored" },
    Nodejs: { name: "Nodejs", icon: "devicon-nodejs-plain colored" },
    Express: { name: "Express", icon: "devicon-express-original colored" },
    MongoDB: {
      name: "MongoDB",
      icon: "devicon-mongodb-plain-wordmark colored",
    },
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {Object.keys(skills).map((skill,i) => {
              return <Skill key={i} skill={skills[skill]} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

MySkills.propTypes = propTypes;
MySkills.defaultProps = defaultProps;

export default MySkills;
