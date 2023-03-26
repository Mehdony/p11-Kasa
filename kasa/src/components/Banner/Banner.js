import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.bannerContainer}>
      <img
        className={styles.background}
        src={props.imgSource}
        alt="background"
      />
      {props.home ? (
        <>
          <div className={styles.blend}></div>
          <h1 className={styles.bannerText}> <span>Chez Vous, </span> <span>partout et ailleurs</span> </h1>
        </>
      ) : null}
    </div>
  );
};

export default Banner;
