import React from "react";
import styles from "./AboutBanner.module.css";

const AboutBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img
        className={styles.background}
        src="./AboutBanner.png"
        alt="background"
      />
      {/* <div className={styles.blend}></div> */}
      {/* <h1 className={styles.bannerText}>Chez Vous, partout et ailleurs</h1> */}
    </div>
  );
};

export default AboutBanner;
