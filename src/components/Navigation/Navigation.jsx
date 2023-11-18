import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthToken, isUserLoggedIn } from "../../utils";
import { logout } from "../../services/authService";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  const logoutHandler = () => {
    logout().then(() =>setIsLoggedIn(isUserLoggedIn()));
  };

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        HeyBohoGirl
      </Link>
      <div className={styles.headerRight}>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About us</Link>
        {isLoggedIn ? (
          <div className={styles.authButtons}>
            <Link onClick={logoutHandler}>
              Logout
            </Link>
            <Link to="/order">Make an Order</Link>
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
};

export default Navigation;
