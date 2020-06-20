import React from "react";
import styles from "./HalfWideContext.module.scss";
import DetailBlock from "./components/DetailBlock";
import Lists from "./components/FunctionalBlocks/Lists";
import PopUpWindow from "./components/FunctionalBlocks/PopUpWindow";
import HalfContext from './components/FunctionalBlocks/HalfContext';


const HalfWideContext = (props) => {
  const renderFunctionalBlock = (blockName) => {
    switch (blockName) {
      case "Lists":
        return <Lists {...props} />;
      case "Popup":
        return <PopUpWindow {...props} />;
      case "Context":
        return <HalfContext {...props} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <DetailBlock {...props} />
      </div>
      <div className={styles.functionBlock}>
        {renderFunctionalBlock(props.type)}
      </div>
    </div>
  );
}

export default HalfWideContext;
