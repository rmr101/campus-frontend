import React from 'react';
import styles from './App.module.scss';
import Root from './routes/Root';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Root/>
    </div>
  );
};

export default App;
