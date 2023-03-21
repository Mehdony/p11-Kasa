import React from "react";
import Banner from "../components/Banner/Banner";
import DropDown from "../components/DropDown/DropDown";
import * as aboutList from "../MocksDatas/about.json";
import styles from "./About.module.css";

const About = () => {
  const img = "./AboutBanner.png";

  return (
    <div>
      <Banner imgSource={img} />
      <div className={styles.aboutdropcontainer}>
        {aboutList.default.map((data) => (
          <DropDown title={data.title} datas={data.description} about={true} />
        ))}
      </div>
    </div>
  );
};

export default About;
