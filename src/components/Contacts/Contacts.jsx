import styles from "./Contacts.module.css";
import useForm from "../../hooks/useForm";
import { sendMessage } from "../../services/contactService";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

const MessageKeys = {
  Name: "name",
  Email: "email",
  Phone: "phone",
  Message: "message",
};

const Contacts = () => {
  const { userUid } = useContext(AuthContext);
  const navigate = useNavigate();
  const { values, onChange, onSubmit } = useForm(
    {
      [MessageKeys.Name]: "",
      [MessageKeys.Email]: "",
      [MessageKeys.Phone]: "",
      [MessageKeys.Message]: "",
    },
    submitHandler
  );

  async function submitHandler(){
    console.log(values);
    await sendMessage({ ...values, status: "Unread", userUid });
    navigate('/')
  };

  return (
    <>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.div}>
        <form onSubmit={onSubmit}>
          <label>Name:</label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={onChange}
          />
<label>Email:</label>
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <label>Phone:</label>
          <input
            className={styles.input}
            id="phone"
            type="text"
            placeholder="Phone"
            name="phone"
            value={values.phone}
            onChange={onChange}
          />
          <label>Message:</label>
          <input
            className={styles.input}
            id="message"
            type="text"
            placeholder="Message"
            name="message"
            value={values.message}
            onChange={onChange}
          />

          <button className={styles.button}>SEND</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
