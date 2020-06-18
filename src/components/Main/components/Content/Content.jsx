import React from "react";
import styles from "./Content.module.scss";
import Context from './components/Context';
import CourseDetail from './components/Context/components/CourseDetail/CourseDetail';

const Content = (props) => {
  return (
    //以后说不定会塞东西进去
    //暫時用這展示 CourseDetail，之後可以再整合進框架裡
    <div className={styles.wrapper}>
      <Context {...props} />
      <CourseDetail {...props}/>
    </div>
  );
}

export default Content;
