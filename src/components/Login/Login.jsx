import { useContext } from "react";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys ={
  Email: 'email',
  Password: 'password'
}

const Login = () => {

const {loginSubmitHandler} = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    loginSubmitHandler
  );

  return (
    <>
      <h1 className={styles.title}>LogIn</h1>
      <div className={styles.loginForm}>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              name={LoginFormKeys.Email}
              className={styles.input}
              value={values[LoginFormKeys.Email]}
              onChange={onChange}
            />
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              name={LoginFormKeys.Password}
              className={styles.input}
              type="password"
              value={values[LoginFormKeys.Password]}
              onChange={onChange}
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
