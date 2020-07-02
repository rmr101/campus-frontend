import React from 'react';
import styles from './Layout.module.scss';
import Nav from './../Nav';
import Main from "./../Main";

export default () => (
  <React.Fragment>
    <div className={styles.nav}>
      <Nav />
    </div>
    <div className={styles.main}>
      <Main />
    </div>
  </React.Fragment>
);