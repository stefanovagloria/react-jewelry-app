import { useContext } from "react";
import {Navigate} from 'react-router-dom'
import AuthContext from "../contexts/authContext";

const AuthGuard = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  if(!isAuthenticated){
    return <Navigate to='/login'/>
  }
  return <>{props.children}</>;
};

export default AuthGuard;
