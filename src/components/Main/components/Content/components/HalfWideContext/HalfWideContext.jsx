import React from "react";
import styles from "./HalfWideContext.module.scss";
import DetailBlock from "./components/DetailBlock";
import Lists from "./components/FunctionalBlocks/Lists";
import Button from "./components/FunctionalBlocks/Button";
import HalfContext from './components/FunctionalBlocks/HalfContext';


const HalfWideContext = (props) => {
  const renderFunctionalBlock = (blockName) => {
    switch (blockName) {
      case "Lists":
        return <Lists {...props} />;
      case "Popup":
        //目前放着这，但以后可以单独拿出来用
        return (
          <React.Fragment>
            <Button type={"DELETE"} />
            <Button type={"UPDATE"} />
            <Button type={"CREATE"} />
          </React.Fragment>
        );
      case "Context":
        return <HalfContext {...props} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingBlock}>
        <DetailBlock {...props} />
      </div>
      <div className={styles.functionBlock}>
        {renderFunctionalBlock(props.type)}
      </div>
    </div>
  );
}

export default HalfWideContext;
