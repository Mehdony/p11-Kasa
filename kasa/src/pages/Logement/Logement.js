import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import * as data from "../../MocksDatas/datas.json";
import HostInfos from "../../components/HostInfos/HostInfos";
import DropDown from "../../components/DropDown/DropDown";
import styles from "./Logement.module.css";
import Error from "../../components/Error/Error";

const Logement = () => {
  //  récupère l'id du logement dans l'url
  const { id } = useParams();
  // récupère les données du logement correspondant à l'id
  const datas = data.default.find((data) => data.id === id);


  // si l'id n'existe pas dans les données, on affiche une page d'erreur
  if(datas=== undefined) {
    return <Error/>
  }

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
