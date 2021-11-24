import '@fontsource/fira-mono';
import '@fontsource/allerta-stencil';

import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Header from './modules/common/components/Header/Header';
import Hero from './modules/common/components/Hero/Hero';
import Testimonials from './modules/common/components/Testimonials/Testimonials';
import BlogList from './modules/common/components/Blog/BlogList';
import Pricing from './modules/common/components/Pricing/Pricing';
import Body from './modules/common/components/Body/Body';
import Footer from './modules/common/components/Footer/Footer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Hero />
    <BlogList />
    <Body />
    <Testimonials />

    <Pricing />
    <Footer />
  </ChakraProvider>
);
