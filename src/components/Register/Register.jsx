import { useEffect, useState } from "react";
import {signUp} from '../../services/authService';
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRepassword] = useState("");

 useEffect(() =>{
  
 }, [])

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const rePasswordChangeHandler = (e) => {
    setRepassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = signUp({email,password,rePassword});

    console.log(user);
    
  };

  return (
    <>
      <h1 className={styles.title}>REGISTER</h1>
      <div className={styles.form}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={emailChangeHandler}
            />
            <label htmlFor="password">Password:</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={passwordChangeHandler}
            />
            <label htmlFor="rePassword">Repeat password:</label>
            <input
              className={styles.input}
              type="password"
              value={rePassword}
              onChange={rePasswordChangeHandler}
            />
          </div>
          <button className={styles.sbutton} type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
