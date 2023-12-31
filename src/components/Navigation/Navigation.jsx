import {  useContext } from "react";
import { Link } from "react-router-dom";


import styles from "./Navigation.module.css";
import AuthContext from "../../contexts/authContext";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className={styles.header}>
      <Link to="/" className={styles.logo}>
        HeyBohoGirl
      </Link>
      <div className={styles.headerRight}>
        <Link to="/products">Products</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/profile">My Profile</Link>
        {isAuthenticated && (
          <>
            <Link to="/my-orders">My Orders</Link>
            <div className={styles.authButtons}>
              <Link to="/logout">Logout</Link>
              <Link to="/order">Make an Order</Link>
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
