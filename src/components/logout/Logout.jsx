import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";

const Logout = () => {
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    logoutHandler();
  }, []);

  return null;
};

export default Logout;
