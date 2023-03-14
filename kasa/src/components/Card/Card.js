import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.layer}>
        <p className={styles.title}>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
