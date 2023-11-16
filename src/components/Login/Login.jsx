import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import styles from "./Login.module.css";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const usernameChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = await signIn({ username, password });
    console.log(user)
    if(user !== undefined){
      localStorage.setItem("authToken", user._kmd.authtoken);
      localStorage.setItem('userId',user._id )
      navigate('/');
    }

    
  };

  return (
    <>
      <h1 className={styles.title}>LogIn</h1>
      <div className={styles.loginForm}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Username:
            </label>
            <input
              className={styles.input}
              value={username}
              onChange={usernameChangeHandler}
            />
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <button className={styles.submitBtn} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
