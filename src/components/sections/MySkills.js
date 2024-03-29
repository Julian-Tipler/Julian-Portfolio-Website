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
      "With two years of full-stack experience at a dynamic startup, I offer a valuable blend of front-end and back-end skills. I'm quick to pick up new technologies and am always looking to improve my existing skills.",
  };

  const skills = {
    Javascript: {
      name: "Javascript",
      icon: "devicon-javascript-plain colored",
    },
    Typescript: {
      name: "Typescript",
      icon: "devicon-typescript-plain colored",
    },
    React: { name: "React", icon: "devicon-react-plain colored" },
    Ruby: { name: "Ruby", icon: "devicon-ruby-plain colored" },
    Redux: { name: "Redux", icon: "devicon-redux-plain colored" },
    Graphql: { name: "Graphql", icon: "devicon-graphql-plain colored" },
    Nodejs: { name: "Nodejs", icon: "devicon-nodejs-plain colored" },
    Express: { name: "Express", icon: "devicon-express-original colored" },
    MongoDB: {
      name: "MongoDB",
      icon: "devicon-mongodb-plain-wordmark colored",
    },
    Postgresql: {
      name: "Postgresql",
      icon: "devicon-postgresql-plain colored",
    },
    Firebase: {
      name: "Firebase",
      icon: "devicon-firebase-plain colored",
    },
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {Object.keys(skills).map((skill, i) => {
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
