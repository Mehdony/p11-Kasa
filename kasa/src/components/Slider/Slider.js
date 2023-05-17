import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
    
  // Position de l'image dans le tableau d'images (par défaut, la première image)
  const [position, setPosition] = useState(0);

  // On récupère les données du logement
  const datas = props.datas;

  // On récupère le tableau d'images
  const images = datas.pictures;

  // On crée une fonction pour passer à l'image suivante
  const next = () => {
    // Si la position de la prochaine image est superieure à la position de la dernière image dans le tableau, alors on retourne à la première image
    setPosition(position + 1 > images.length - 1 ? 0 : position + 1);
  };

  // On crée une fonction pour passer à l'image précédente
  const prev = () => {
    // Si la position de la prochaine image est inférieure à la position de la première image dans le tableau, alors on retourne à la dernière image
    setPosition(position - 1 < 0 ? images.length - 1 : position - 1);
  };

  return (
    <section className={styles.sliderContainer}>
      {/* on affiche l'image avec la postion definie via useState */}
      <img className={styles.sliderImage} src={images[position]} alt="images" />
      {/*  si il y a une image ou moins on n'affiche pas les flèches et le compteur */}
      {images.length <= 1 ? null : (
        <>
          <div className={styles.arrowsContainer}>
            <div className={styles.sliderButtons} onClick={prev}>
              <img src="/assets/left.png" alt="left arrow" />
            </div>
            <div className={styles.sliderButtons} onClick={next}>
              <img src="/assets/right.png" alt="right arrow" />
            </div>
          </div>
          <span className={styles.counter}>
            {position + 1} / {images.length}
          </span>
        </>
      )}
    </section>
  );
};

export default Slider;
