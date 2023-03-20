import React from "react";
import Banner from "../components/Banner/Banner";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const Home = () => {
  const home = true
  const img = "./background.png";
  return (
    <div>
      <Banner imgSource={img} home={home}/>
      <CardsContainer  />
    </div>
  );
};

export default Home;
