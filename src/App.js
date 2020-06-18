import React from 'react';
import styles from './App.module.scss';
import Nav from './components/Nav';
import Main from "./components/Main";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current:"Dashboard",
      role:"student",
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){

  }

  render(){
    return (
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.main}>
          <Main/>
        </div>
      </div>
    );
}
}

export default App;
