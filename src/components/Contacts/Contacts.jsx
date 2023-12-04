import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.div}>
        <form>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Name"
          />

          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email"
          />

          <input
            className={styles.input}
            id="phone"
            type="text"
            placeholder="Phone"
          />

          <input
            className={styles.input}
            id="message"
            type="text"
            placeholder="Message"
          />

          <button className={styles.button}>SEND</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
