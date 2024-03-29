import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Error.module.css";

const error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>

      <h2 className={styles.errorText}> <span>Oups ! La page que</span> <span>vous demandez n'existe pas.</span>   </h2>

      <NavLink className={styles.errorLink}
        to="/">
       <p>Retourner sur la page d'accueil </p>
      </NavLink>
    </div>

  );
};

export default error;
