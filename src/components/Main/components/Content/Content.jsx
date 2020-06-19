import React from "react";
import styles from "./Content.module.scss";
import HalfWideContext from "./components/HalfWideContext";
import FullWideContext from './components/FullWideContext';

const Content = (props) => { 
  const renderComponent=(props)=>{
    switch (props.range) {
      case "Full":
        return <FullWideContext {...props} />;
      case "Half":
        return <HalfWideContext {...props} />;
      default:
        return null;
    }

  }

  return (
    <div className={styles.wrapper}>
      {renderComponent(props)}
    </div>
  );
}

export default Content;
