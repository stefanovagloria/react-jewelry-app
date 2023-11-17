import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await signIn(email, password);
    navigate("/");
  };

  return (
    <>
      <h1 className={styles.title}>LogIn</h1>
      <div className={styles.loginForm}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              className={styles.input}
              value={email}
              onChange={emailChangeHandler}
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
