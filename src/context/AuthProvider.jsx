import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();

  // sign in or create account with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);
  const authInfo = {
    user,
    loading,
    googleSignIn,
    createUser,
    userLogin,
    userLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
