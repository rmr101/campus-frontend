import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";


class Main extends React.Component {
  constructor(props){
    super(props);

    //之后再Lifting
    this.state = {
      
    };
  }

  render(){
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header title={"Students"}/>
        <Header title={"Student id 101"}/>
      </div>
      <div className={styles.content}>
        <Content/>
      </div>
    </div>
  );
  }
}

export default Main;
