import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className= {styles.navigation} >
      <Logo />
      <ul className={styles.navContainer}>
        <NavLink to="/" className={(nav) => (nav.isActive ? styles.navActive : "")}>
          <li className={styles.navLink}>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? styles.navActive : "")}
        >
          <li className={styles.navLink}>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
