import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import * as data from "../MocksDatas/datas.json";
import HostInfos from "../components/HostInfos/HostInfos";


const Logement = () => {
  const { id } = useParams();
  const datas = data.default.find((data) => data.id === id);
  console.log("log de datas brut : ", datas);

  return (
    <div>
      <Slider datas={datas} />
      <HostInfos datas={datas} />
    </div>
  );
};

export default Logement;
