import React from "react";

import DropDown from "../../components/DropDown/DropDown";
import * as aboutList from "../../MocksDatas/about.json";
import styles from "./About.module.css";

const About = () => {


  return (
    <div>
      <header className={`${styles.hero} ${styles.aboutheader}`}>
        <img
          className={`${styles.heroimg} ${styles.aboutimage}`}
          src={
            window.innerWidth > 768
              ? '/assets/about.png'
              : '/assets/smallabout.png'
          }
          alt=""
        />
      </header>
      <div className={styles.aboutdropcontainer}>
        {aboutList.default.map((data) => (
          <DropDown key={data.title} title={data.title} datas={data.description} about={true} />
        ))}
      </div>
    </div>
  );
};

export default About;
