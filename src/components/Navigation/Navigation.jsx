import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        HeyBohoGirl
      </Link>
      <div className={styles.menu}>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/profile">My Profile</Link>
        {isAuthenticated && (
          <>
            <Link to="/my-orders">My Orders</Link>
            <div className={styles.authButtons}>
              <Link to="/order">Make an Order</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </>
        )}
        {!isAuthenticated && (
          <div className={styles.authButtons}>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
