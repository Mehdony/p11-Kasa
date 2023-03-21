import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import * as data from "../MocksDatas/datas.json";
import HostInfos from "../components/HostInfos/HostInfos";
import DropDown from "../components/DropDown/DropDown";
import styles from "./Logement.module.css";

const Logement = () => {
  const { id } = useParams();
  const datas = data.default.find((data) => data.id === id);
  console.log("log de datas brut : ", datas);

  return (
    <div>
      <Slider datas={datas} />
      <HostInfos datas={datas} />

      <div className={styles.dropdowncontainer}>
        <DropDown title="Description" datas={datas.description} />
        <DropDown title="Équipement" datas={datas.equipments} />
      </div>
    </div>
  );
};

export default Logement;
