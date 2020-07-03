import React from 'react';
import styles from "./Login.module.scss";

export default () => {
const Day = [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const Month = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
const date = new Date();
const GreetingMessage = ["Good Morning!","Good Afternoon!","Good Evening!"];
const currentTime = Date().split(" ")[4].slice(0, 2);

const chooseGreetingMessage=()=>{
  if (currentTime > 6 && currentTime < 12){
    return GreetingMessage[0];
  }else if (currentTime > 12 && currentTime < 18){
    return GreetingMessage[1];
  }else{
    return GreetingMessage[2];
  }
}

return (
  <div className={styles.greeting}>
    <h3 className={styles.date}>{`${Day[date.getDay()].toUpperCase()}`}</h3>
    <h3 className={styles.date}>{`${date.getDate()}, ${Month[
      date.getMonth()
    ].toUpperCase()}`}</h3>
    <h1 className={styles.title}>{chooseGreetingMessage()} </h1>
    <p>A management system which only makes room for things that matter.</p>
  </div>
);
}