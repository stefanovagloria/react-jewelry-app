import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {  isUserLoggedIn } from "../../utils";
import { logout } from "../../services/authService";

import styles from "./Navigation.module.css";
import AuthContext from "../../contexts/authContext";

const Navigation = () => {
  const {isAuthenticated} = useContext(AuthContext);

  const logoutHandler = () => {
    isAuthenticated = false;
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
        {isAuthenticated && (
          <div className={styles.authButtons}>
            <Link onClick={logoutHandler}>
              Logout
            </Link>
            <Link to="/order">Make an Order</Link>
          </div>
        ) }
        { !isAuthenticated && (
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
