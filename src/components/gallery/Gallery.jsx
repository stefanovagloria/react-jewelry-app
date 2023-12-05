import styles from "./Gallery.module.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <article className={styles.box}>
        <a className={styles.a}>
          <div className={styles.img}>
            <img src={img1} alt="NO IMAGE" />
          </div>
          <div className="detail-box"></div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}>
          <div className={styles.img}>
            <img src={img2} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}>
          <div className={styles.img}>
            <img src={img3} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}>
          <div className={styles.img}>
            <img src={img4} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}>
          <div className={styles.img}>
            <img src={img5} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}> 
          <div className={styles.img}>
            <img src={img6} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}> 
          <div className={styles.img}>
            <img src={img7} alt="NO IMAGE" />
          </div>
        </a>
      </article>
      <article className={styles.box}>
        <a className={styles.a}> 
          <div className={styles.img}>
            <img src={img8} alt="NO IMAGE" />
          </div>
        </a>
      </article>
    </div>
  );
};

export default Gallery;
