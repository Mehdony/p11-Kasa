import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link to="/">
        <img className="Logo" src="/LOGO.png" alt="logo Kasa" />
      </Link>
    </div>
  );
};

export default Logo;
