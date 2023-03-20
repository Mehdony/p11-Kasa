import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className={styles.card} to={`/logement/${props.id}`}>
        <img  src={props.cover} alt="" />
        <div className={styles.blend}></div>
        <p className={styles.title}>{props.title}</p>
    </Link>
  );
};

export default Card;
