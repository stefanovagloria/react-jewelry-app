import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys ={
  Email: 'email',
  Password: 'password'
}

const Login = () => {

const {loginSubmitHandler} = useContext(AuthContext);
const [errors, setErrors] = useState({});

  const { values, onChange, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    loginSubmitHandler
  );

  const emailValidator = (e) =>{
    const value = e.target.value;
    if(!value.includes('@')){
      setErrors(state => ({
        ...state,
        email: 'Please enter a valid email address!'
      }));
    } else{
      setErrors(state =>({
        ...state,
        email: ''
      }))
    }
  }

  const passwordValidator = (e) =>{
    if(e.target.value.length < 6){
      setErrors(state => ({
        ...state,
        password: 'Passwords must be at least 6 characters'
    }))
    } else{
      setErrors(state => ({
        ...state,
        password: ''
      }))
    }
  }
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
              onBlur={emailValidator}
            />
            {errors.email && (
              <p className={styles.errors}>{errors.email}</p>
            )}
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
          <button className={styles.submitBtn} type="submit" disabled={errors.email !== '' || errors.password !== ''}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
