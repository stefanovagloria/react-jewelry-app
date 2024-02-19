import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
    <div>
      <Link to='/about'>About Us</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
        impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
        magni. Eveniet.
      </p>
    </div>
    <div>
      <Link to='/guest-house'>Need Help</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
        impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
        magni. Eveniet.
      </p>
    </div>
    <div>
      <Link to='/contacts'>Contact Us</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        doloremque quod ipsum. Mollitia ipsum nam molestias obcaecati voluptas
        impedit saepe sequi cum corrupti ex quasi asperiores, nemo natus
        magni. Eveniet.
      </p>
    </div>
  </div>
  );
};

export default Footer;
