import React from 'react';
import styles from "./Login.module.scss";

export default () => {
const GreetingMessage = ["Good Morning!","Good Afternoon!","Good Evening!"];
const currentTime = Date().split(" ")[4].slice(0, 2);
const today = Date().split(" ")[0];
const month = Date().split(" ")[1];
const day = Date().split(" ")[2];

const chooseGreetingMessage=()=>{
  if (currentTime > 4 && currentTime < 12){
    return GreetingMessage[0];
  }else if (currentTime > 12 && currentTime < 18){
    return GreetingMessage[1];
  }else{
    return GreetingMessage[2];
  }
}

return (
  <div data-testid="greeting" className={styles.greeting}>
    <h3 className={styles.date}>{`${today.toUpperCase()}`}</h3>
    <h3 className={styles.date}>{`${day}, ${month.toUpperCase()}`}</h3>
    <h1 className={styles.title}>{chooseGreetingMessage()} </h1>
    <p>A management system which only makes room for things that matter.</p>
  </div>
);
}