import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/authContext";
import image from "../../assets/login-form-v18.jpg";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { values, onChange, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    loginSubmitHandler
  );

  const emailValidator = (e) => {
    const value = e.target.value;
    if (!value.includes("@")) {
      setErrors((state) => ({
        ...state,
        email: "Please enter a valid email address!",
      }));
    } else {
      setErrors((state) => ({
        ...state,
        email: "",
      }));
    }
  };

  const passwordValidator = (e) => {
    if (e.target.value.length < 6) {
      setErrors((state) => ({
        ...state,
        password: "Passwords must be at least 6 characters",
      }));
    } else {
      setErrors((state) => ({
        ...state,
        password: "",
      }));
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div>
        <img src={image} className={styles.img}/>
      </div>
      <div className={styles.loginContainer}>
        <div>
          <h1 className={styles.title}>Login to continue</h1>
        </div>
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
                onBlur={emailValidator}
              />
              {errors.email && <p className={styles.errors}>{errors.email}</p>}
              <label htmlFor="password" className={styles.label}>
                Password:
              </label>
              <input
                name={LoginFormKeys.Password}
                className={styles.input}
                type="password"
                value={values[LoginFormKeys.Password]}
                onChange={onChange}
                onBlur={passwordValidator}
              />
              {errors.password && (
                <p className={styles.errors}>{errors.password}</p>
              )}
            </div>
            <button
              className={styles.submitBtn}
              type="submit"
              disabled={
                Object.values(errors).some((x) => x) ||
                values.email === "" ||
                values.password === ""
              }
            >
              Login
            </button>
            <p>
              Create an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
