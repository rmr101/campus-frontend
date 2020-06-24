import React from 'react';
import styles from './NavItems.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItems = ({title,icon,collapse,onClick,active,id}) => {
  return (
    <div
      className={`${styles.wrapper} ${active ? styles.active : styles.inActive}`}
      onClick={e => onClick(e,id)}
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
