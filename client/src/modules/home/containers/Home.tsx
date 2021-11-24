import React from 'react';

import BlogList from '../components/Blog/BlogList';
import Body from '../components/Body/Body';
import Hero from '../components/Hero/Hero';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <BlogList />
      <Body />
      <Testimonials />
      <Pricing />
    </React.Fragment>
  );
};

export default Home;
