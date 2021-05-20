import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import MySkills from '../components/sections/MySkills';
import MyProjects from '../components/sections/MyProjects';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import ContactMe from '../components/sections/ContactMe'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <MySkills id="my-skills"/>
      <MyProjects id="my-projects" invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial id="my-testimonials" topDivider />
      <Cta split />
      <ContactMe/>
    </>
  );
}

export default Home;