import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import MySkills from '../components/sections/MySkills';
import MyProjects from '../components/sections/MyProjects';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <MySkills />
      <MyProjects invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;