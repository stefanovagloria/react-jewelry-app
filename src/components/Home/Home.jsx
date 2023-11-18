import styles from "./Home.module.css";
import sampleImg from "../../assets/home.avif";

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={sampleImg} alt="cinque terre" />
      <div className={styles.centered}>
        <div>
          <h1>Welcome To Our Jewelry Shop</h1>
          <p>
            Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet
            non necessitatibus error distinctio mollitia suscipit. Nostrum fugit
            doloribus consequatur distinctio esse, possimus maiores aliquid
            repellat beatae cum, perspiciatis enim, accusantium perferendis.
          </p>
          <a
            className={styles.contactBtn}
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
