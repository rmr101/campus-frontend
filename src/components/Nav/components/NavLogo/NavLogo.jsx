import React from 'react';
import styles from './NavLogo.module.scss';


export default ()=> (
  <div className={styles.wrapper}>
    <img className={styles.logo} src={require('./logo-light.png')} alt = ""/>
  </div>
)