import React from 'react';
import styles from './NavItems.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItems = ({title,icon,collapse,onClick,active,NavId}) => {
  return (
    <div
      className={`${styles.wrapper} ${
        active ? styles.active : styles.inActive
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick(NavId);}}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={collapse ? styles.hide : styles.title}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
export default NavItems;
