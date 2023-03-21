import React from "react";
import styles from "./HostInfos.module.css";

const HostInfos = (props) => {
  const datas = props.datas;
  const rating = datas.rating;
  const starFill = <img src="/assets/starFill.png" alt="Star fill" />;
  const starEmpty = <img src="/assets/starEmpty.png" alt="Star empty" />;
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(starFill);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(starEmpty);
  }

  return (
    <section className={styles.hostInfos}>
      <div className={styles.titleLocationTags}>
        <h2 className={styles.title}>{datas.title}</h2>
        <p className={styles.location}>{datas.location}</p>
        <div className={styles.tags}>
          {datas.tags.map((tag, index) => {
            return (
              <div className={styles.tag} key={index} >
                <p>
                  {tag}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.namePpRating}>
        <div className={styles.namePp}>
          <p className={styles.name}>{datas.host.name}</p>
          <img className={styles.pp} src={datas.host.picture} alt="pp" />
        </div>
        <div className={styles.rating}>
          {stars.map((star, index) => {
            return (
              <div key={index} className={styles.star}>
                {star}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HostInfos;
