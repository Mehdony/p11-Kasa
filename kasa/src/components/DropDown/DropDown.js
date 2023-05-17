import React, { useState } from "react";
import styles from "./DropDown.module.css";

const DropDown = (props) => {
  // On crée un state pour savoir si le menu est ouvert ou non
  const [open, setOpen] = useState(false);
  const datas = props.datas;
  const title = props.title;
  

  return (
    <div
      // Si on se trouve sur la page about, on ajoute une classe pour modifier le style
      className={`${styles.dropdownmenu} ${ props.about ? styles.aboutdropmenu : "" }`}
    >
      {/*  au click on change le state sur son opposé  */}
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
      {/* si ça n'est pas ouvert on n'affiche pas le content  */}
      {!open ? null : (
        <div className={styles.dropdownmenucontent}>
          {/* si les données passées sont sous forme de tableau  */}
          {Array.isArray(datas) ? (
            // on map les données pour les afficher
            datas.map((data) => <p key={data}>{data}</p>)
          ) : (
            // sinon on affiche les données
            <p>{datas}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
