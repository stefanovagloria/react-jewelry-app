import { Link } from "react-router-dom";

import styles from "./Home.module.css";
import sampleImg from "../../assets/home.avif";

import Loader from "../loader/Loader";

const Home = () => {
  return (
    <>
      {sampleImg && (
        <div className={styles.container}>
          <img className={styles.img} src={sampleImg} alt="cinque terre" />
          <div className={styles.centered}>
            <div>
              <h1>Welcome To Our Jewelry Shop</h1>
              <p>
                Sequi perspiciatis nulla reiciendis, rem, tenetur impedit,
                eveniet non necessitatibus error distinctio mollitia suscipit.
                Nostrum fugit doloribus consequatur distinctio esse, possimus
                maiores aliquid repellat beatae cum, perspiciatis enim,
                accusantium perferendis.
              </p>
              <Link to="/contacts" className={styles.contactBtn}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
      {!sampleImg && <Loader />}
    </>
  );
};

export default Home;
