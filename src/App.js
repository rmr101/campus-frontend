import React from 'react';
import styles from './App.module.scss';
import Nav from './components/Nav';
import Main from "./components/Main";

const App= () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.main}>
        <Main/>
      </div>
    </div>
  );
}

export default App;
