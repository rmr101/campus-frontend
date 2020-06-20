import React from "react";
import styles from "./Content.module.scss";
import HalfWideContext from "./components/HalfWideContext";
import FullWideContext from './components/FullWideContext';
import HelpContext from './components/HelpContext';

/*  
  HelpContext 暫放這  可能須重構!!
*/
const Content = (props) => { 
  const renderComponent=(props)=>{
    switch (props.range) {
      case "Full":
        return <FullWideContext {...props} />;
      case "Half":
        return <HalfWideContext {...props} />;
      case "Help":
        return <HelpContext {...props} />;
      case "PROPS":
        return "Components";
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
