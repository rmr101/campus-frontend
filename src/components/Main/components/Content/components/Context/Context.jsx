import React from "react";
import styles from "./Context.module.scss";
import ListsGroup from './components/ListsGroup';
import Detail from './components/Detail';

const Context = (props) => {

  return (
    <div className={styles.wrapper}>
      <Detail {...props} />
      <div className={styles.functionBlock}>
        {props.type === "ListsGroup" || "Lists" ? (
          <ListsGroup {...props} />
        ) : (
          //以后要放别的functional component
          null
        )}
      </div>
    </div>
  );
}

export default Context;
