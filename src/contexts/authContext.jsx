import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { logout, signIn, signUp } from "../services/authService";
import Path from "../../src/paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    signIn(values.email, values.password).then((userData) => {
      setAuth({ userUid: userData.uid });
    });

    navigate(Path.Home);
    console.log(auth);
  };

  const registerSubmitHandler = (values) => {
    signUp(values.email, values.password).then((userData) => {
      setAuth({ userUid: userData.uid });
      navigate(Path.Home);
    });
  };

  const logoutHandler = () => {
    logout().then(() => setAuth({}));
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    isAuthenticated: localStorage.getItem("accessToken"),
    userUid: auth.userUid,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
