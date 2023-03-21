import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = (props) => {
  const [position, setPosition] = useState(0);
  const datas = props.datas;

  const images = datas.pictures;
  const next = () => {
    setPosition(position + 1 > images.length - 1 ? 0 : position + 1);
  };
  const prev = () => {
    setPosition(position - 1 < 0 ? images.length - 1 : position - 1);
  };

  return (
    <section className={styles.sliderContainer}>
      <img className={styles.sliderImage} src={images[position]} alt="images" />
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
