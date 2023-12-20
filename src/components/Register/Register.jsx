import { useContext, useState } from "react";
import styles from "./Register.module.css";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  RePassword: "rePassword",
};

const Register = () => {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { values, onChange, onSubmit } = useForm(
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.RePassword]: "",
    },
    registerSubmitHandler
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

  const rePasswordValidator = (e) =>{
    if(e.target.value.length < 6){
      setErrors(state => ({
        ...state,
        rePassword: 'Passwords must be at least 6 characters'
    }))
    } else{
      setErrors(state => ({
        ...state,
        rePassword: ''
      }))
    }
  }

  return (
    <>
      <h1 className={styles.title}>REGISTER</h1>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              className={styles.input}
              type="email"
              value={values[RegisterFormKeys.Email]}
              onChange={onChange}
              onBlur={emailValidator}
            />
             {errors.email && (
              <p className={styles.errors}>{errors.email}</p>
            )}
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              className={styles.input}
              type="password"
              value={values[RegisterFormKeys.Password]}
              onChange={onChange}
              onBlur={passwordValidator}
            />
            {errors.password && (
              <p className={styles.errors}>{errors.password}</p>
            )}
            <label htmlFor="rePassword">Repeat password:</label>
            <input
              name="rePassword"
              className={styles.input}
              type="password"
              value={values[RegisterFormKeys.RePassword]}
              onChange={onChange}
              onBlur={rePasswordValidator}
            />
             {errors.rePassword && (
              <p className={styles.errors}>{errors.rePassword}</p>
            )}
          </div>
          <button className={styles.sbutton} type="submit" disabled={Object.values(errors).some(x => x)
          || values.email === '' || values.password === '' || values.rePassword === ''}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
