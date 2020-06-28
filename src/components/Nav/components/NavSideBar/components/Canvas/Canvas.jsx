import React from 'react';
import styles from './Canvas.module.scss';
import * as renderMap from './NavCanvasListsMapper';


const Canvas= ({current,onClick,role}) => {

  
const renderRoleSelection = (array) =>{
  return array.map((obj) => (
    <div
      onClick={(e) => onClick(e, obj.title, obj.id, current)}
      className={styles.links}
      key={current + "id" + Math.random()}
    >
      {obj.title}
    </div>
  ));
}

const renderCanvas = (current) =>{
  //目前先用student
  switch (role) {
    case "student":
      return renderRoleSelection(renderMap.StudentRenderMap[current]);
    case "teacher":
      return renderRoleSelection(renderMap.TeacherRenderMap[current]);
    case "admin":
      return renderRoleSelection(renderMap.AdminRenderMap[current]);
      default:
        return null
  }
  }


  return (
    <div className={styles.wrapper}>
      {renderCanvas(current)}

    </div>
  );};
export default Canvas;
