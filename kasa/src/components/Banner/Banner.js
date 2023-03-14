import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        className={styles.background}
        src="./background.png"
        alt="background"
      />
      <div className={styles.blend}></div>
      <h1 className={styles.bannerText}>Chez Vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;
