import React from "react";
import styles from "./SelectAvatar.module.scss";
import { faUserTie, faUserGraduate,faUser,faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectAvatar =({icon,onClick,color,background})=>{

    const changeIcon= (newIcon)=>{
      onClick(newIcon,color,background);
    }
      const changeColor = (newColor) => {
        onClick(icon, newColor, background);
      };
        const changeBackground = (newBackground) => {
          onClick(icon, color, newBackground);
        };


    return (
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.avatarSelection} ${styles.row}`}>
          <p className={styles.name}>Avatar </p>
          <div className={styles.selectionRow}>
            <div
              className={styles.display}
              onClick={() => changeIcon(faUserTie)}
            >
              <FontAwesomeIcon icon={faUserTie} />
            </div>
            <div
              className={styles.display}
              onClick={() => changeIcon(faUserGraduate)}
            >
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <div
              className={styles.display}
              onClick={() => changeIcon(faUserSecret)}
            >
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
          </div>
        </div>
        <div className={`${styles.avatarColorSelection} ${styles.row}`}>
          <p className={styles.name}>Color </p>
          <div className={styles.selectionRow}>
            <div
              className={`${styles.display} ${styles.blue}`}
              onClick={() => changeColor(styles.blue)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              className={`${styles.display} ${styles.green}`}
              onClick={() => changeColor(styles.green)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              className={`${styles.display} ${styles.brown}`}
              onClick={() => changeColor(styles.brown)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              className={`${styles.display} ${styles.red}`}
              onClick={() => changeColor(styles.red)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              className={`${styles.display} ${styles.grey}`}
              onClick={() => changeColor(styles.grey)}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
        <div className={`${styles.backgoundColorSelection} ${styles.row}`}>
          <p className={styles.name}>Background</p>
          <div className={styles.selectionRow}>
            <div
              className={`${styles.display} ${styles.dark}`}
              onClick={() => changeBackground(styles.dark)}
            ></div>
            <div
              className={`${styles.display} ${styles.light}`}
              onClick={() => changeBackground(styles.light)}
            ></div>
          </div>
        </div>
      </div>
    );
  }
export default SelectAvatar;
