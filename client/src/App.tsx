import '@fontsource/fira-mono';
import '@fontsource/allerta-stencil';

import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import theme from './theme/theme';
import Home from './modules/home/containers/Home';
import About from './modules/home/containers/About';
import Error from './modules/common/components/Error';
import Header from './modules/common/components/Header/Header';
import Footer from './modules/common/components/Footer/Footer';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </ChakraProvider>
);
