import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <h3>ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
          dolor sit amet,
        </p>
      </div>
      <div>
        <h3>NEED HELP</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum
          dolor sit amet,
        </p>
      </div>
      <div>
        <h3>CONTACT US</h3>
        <p>Burgas, Bulgaria</p>
        <p>+01 95628474</p>
        <p>mail@domain.com</p>
      </div>
      <p className={styles.copyright}>
        @Copyrights - 2023. HeyBohoGirl. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
