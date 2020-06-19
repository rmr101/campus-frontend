import React from 'react';
import styles from './Canvas.module.scss';
import {StudentRenderMap} from './../../../../../../RenderNavConfig/RenderListForNavItem/NavListsConfig';


const Canvas= ({current,onClick}) => {
const renderCanvas = (current) =>
  //目前先用student
  StudentRenderMap[current].map((obj) => (
    <a
      onClick={(e) => onClick(e, obj.title, obj.id , current)}
      className={styles.links}
      key={current +"id" + Math.random()}
    >
      {obj.title}
    </a>
  ));
  return(
  <div className={styles.wrapper}>
    {renderCanvas(current)}
</div>)};
export default Canvas;
