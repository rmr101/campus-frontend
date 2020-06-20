import React from "react";
import styles from "./HelpContext.module.scss";
import ListsGroup from './components/FunctionalBlocks/ListsGroup';
import Detail from './components/Detail';
import Lists from "./components/FunctionalBlocks/Lists";
import Faq from "./components/FunctionalBlocks/Faq";


const HelpContext = (props) => {
  const renderFunctionalBlock = (blockName) => {
    switch (blockName) {
      case "Lists":
        return <Lists {...props} />;
      case "ListsGroup":
        return <ListsGroup {...props} />;
      case "Popup":
        return <Faq {...props} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Detail {...props} />
      </div>
      <div className={styles.functionBlock}>
        {renderFunctionalBlock(props.type)}
      </div>
    </div>
  );
}

export default HelpContext;
