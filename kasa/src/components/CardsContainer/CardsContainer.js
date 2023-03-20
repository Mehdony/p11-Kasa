import React from "react";
import styles from "./CardsContainer.module.css";
import * as mockedData from "../../MocksDatas/datas.json";
import Card from "../Card/Card";

const CardsContainer = () => {
  const datas = mockedData.default;
  console.log(datas);
  return (
    <div className={styles.cardsContainer}>
      {datas.map((data, index) => {
        return <Card title={data.title} key={index} cover={data.cover} />;
      })}
    </div>
  );
};

export default CardsContainer;
