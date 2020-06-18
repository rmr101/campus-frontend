import React from "react";
import styles from "./CourseLists.module.scss";

const courseLists = [
  "Course ID 1001",
  "Course ID 1002",
  "Course ID 1003",
  "Course ID 1004",
  "Course ID 1005",
];

let templateOne = {
  title: courseLists[0],
  content: [{ type: "Context", title: "Course 1001" }],
};
let templateTwo = {
  title: courseLists[1],
  content: [{ type: "Context", title: "Course 1002" }],
};
let templateThree = {
  title: courseLists[2],
  content: [{ type: "Context", title: "Course 1003" }],
};
let templateFour = {
  title: courseLists[3],
  content: [{ type: "Context", title: "Course 1004" }],
};
let templateFive = {
  title: courseLists[4],
  content: [{ type: "Context", title: "Course 1005" }],
};


const CourseLists = ({onClick}) => {
  
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateOne })}
      >
        {courseLists[0]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateTwo })}
      >
        {courseLists[1]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateThree })}
      >
        {courseLists[2]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateFour })}
      >
        {courseLists[3]}
      </a>
      <a
        className={styles.course}
        href="#"
        onClick={(e) => onClick(e, { ...templateFive })}
      >
        {courseLists[4]}
      </a>
    </div>
  );
};

export default CourseLists;
