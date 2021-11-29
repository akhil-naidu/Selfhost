import { createContext, useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase';

// creating a store
const AuthContext = createContext();

// rather than defining this in everyplace, lets use this a hook
export const useAuth = () => useContext(AuthContext);

// custom AuthProvider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn, currentUser);

  //base functions to export via context
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    signup,
    login,
    logOut,
    isLoggedIn,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
