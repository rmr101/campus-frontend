import React from 'react';
import styles from './Canvas.module.scss';


const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

const renderMap = {
  Dashboard: ["Nothing to be render here"],
  Enrollment: ["Course 1001", "Course 1002", "Course 1003"],
  Assignment: ["Assignment 1001", "Assignment 1002", "Assignment 1003"],
  Payment: ["Invoice", "Unpaid course"],
  CourseMarket: ["Nothing to be render here"],
  UserInfo: ["Profile", "Others"],
  Help: ["Frequent Q&A", "Contact Us"],
  Setting: ["Configuration"],
};


const renderCanvas = (current) => (
  renderMap[current].map((title) => <a className={styles.links} key={ generateKey(current) }>{title}</a>)
  )

const Canvas= ({current}) => (
  <div className={styles.wrapper}>
    {renderCanvas(current)}
  </div>);
export default Canvas;
