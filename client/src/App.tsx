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
import Signup from './modules/common/components/Authentication/Signup';
import Signin from './modules/common/components/Authentication/Signin';
import ForgotPassword from './modules/common/components/Authentication/ForgotPassword';
import ProfileCard from './modules/user/components/ProfileCard';
import DashboardLayout from './modules/common/containers/DashboardLayout';

import { useAuth } from './contexts/AuthContext';

export const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/reset' element={<ForgotPassword />} />
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='profile' element={<ProfileCard />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </React.Fragment>

      <Footer />
    </ChakraProvider>
  );
};
