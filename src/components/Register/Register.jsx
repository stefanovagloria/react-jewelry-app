import { useContext } from "react";
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
  const { values, onChange, onSubmit } = useForm(
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.RePassword]: "",
    },
    registerSubmitHandler
  );

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
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              className={styles.input}
              type="password"
              value={values[RegisterFormKeys.Password]}
              onChange={onChange}
            />
            <label htmlFor="rePassword">Repeat password:</label>
            <input
              name="rePassword"
              className={styles.input}
              type="password"
              value={values[RegisterFormKeys.RePassword]}
              onChange={onChange}
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
