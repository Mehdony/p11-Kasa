import React, { useState } from "react";
import styles from "./DropDown.module.css";

const DropDown = (props) => {
  const [open, setOpen] = useState(false);
  const datas = props.datas;
  const title = props.title;

  return (
    <div
      className={`${styles.dropdownmenu} ${
        props.about ? styles.aboutdropmenu : ""
      }`}
    >
      <div className={styles.dropdownmenutitle} onClick={() => setOpen(!open)}>
        {title}
        <button className={styles.dropButton}>
          {!open ? (
            <img src="/assets/down.png" alt="down arrow" />
          ) : (
            <img src="/assets/up.png" alt="up arrow" />
          )}
        </button>
      </div>
      {!open ? null : (
        <div className={styles.dropdownmenucontent}>
          {Array.isArray(datas) ? (
            datas.map((data) => <p key={data}>{data}</p>)
          ) : (
            <p>{datas}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
