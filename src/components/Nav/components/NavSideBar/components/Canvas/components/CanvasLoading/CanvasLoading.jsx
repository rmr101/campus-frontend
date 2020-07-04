import React from 'react';
import styles from './CanvasLoading.module.scss';
import Loader from '../../../../../../../Loader';

export default () => (
  <div className={styles.loading}>
    <Loader color={'white'}/>
  </div>
);
