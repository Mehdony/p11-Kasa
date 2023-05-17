import React from "react";
import styles from "./CardsContainer.module.css";
import * as mockedData from "../../MocksDatas/datas.json";
import Card from "../Card/Card";

const CardsContainer = () => {
  const datas = mockedData.default;

  return (
    <div className={styles.cardsContainer}>
      {datas.map((data, index) => {
        return <Card title={data.title} key={index} cover={data.cover} id={data.id} />;
      })}
    </div>
  );
};

export default CardsContainer;
