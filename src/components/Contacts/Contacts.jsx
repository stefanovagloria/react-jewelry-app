import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.div}>
        <p>
          Google Maps Platform rejected your request. This API project is not
          authorized to use this API.
        </p>
        <form>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Name"
            formControlName="name"
          />

          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email"
            formControlName="email"
          />

          <input
            className={styles.input}
            id="phone"
            type="text"
            placeholder="Phone"
            formControlName="phone"
          />

          <input
            className={styles.input}
            id="message"
            type="text"
            placeholder="Message"
            formControlName="message"
          />

          <button className={styles.button}>SEND</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
