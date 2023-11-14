import { Link } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = ({loggedIn}) => {
  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        HeyBohoGirl
      </Link>
      <div className={styles.headerRight}>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About us</Link>
        {loggedIn ? (
          <div className={styles.authButtons}>
            <Link to="/register">Logout</Link>
            <Link to="/login">Make an Order</Link>
          </div>
        ) : (
          <div className={styles.authButtons}>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
