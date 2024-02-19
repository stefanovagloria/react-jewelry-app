import { Link } from "react-router-dom";

import styles from "./About.module.css";
import image from "../../assets/9.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image}></img>
      </div>
      <div className={styles.info}>
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sequi inventore quaerat labore, deleniti a fugit iste rem est, nisi
          nostrum suscipit repellat officiis quo fugiat laudantium! Placeat,
          dicta illo?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sequi inventore quaerat labore, deleniti a fugit iste rem est, nisi
          nostrum suscipit repellat officiis quo fugiat laudantium! Placeat,
          dicta illo?
        </p>
        <Link to='/contacts' className={styles.link}>Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
