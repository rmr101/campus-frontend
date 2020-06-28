import React from "react";
import styles from "./Content.module.scss";
import HalfWidthLayout from "./components/HalfWidthLayout";
import FullWidthLayout from './components/FullWidthLayout';

const Content = (props) => { 
  const renderComponent=(props)=>{
    switch (props.range) {
      case "Full":
        return <FullWidthLayout {...props} />;
      case "Half":
        return <HalfWidthLayout {...props} />;
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
