import React from "react";
import styles from "./HalfWidthLayout.module.scss";
import Button from "../Button";
import StudentAssignment from './../StudentAssignment';
import Profile from './../Profile';
import { connect } from "react-redux";


const Detail = ({ title, description }) => {
  return (
    <div className={styles.detailWrapper}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const HalfContext = (props) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.context}</p>
    </div>
  );
};


const HalfWidthLayout = (props) => {
  const renderBlock = (blockName) => {
    if(props.role === "student"){
      switch (blockName) {
        // TODO: Depreciated usage
        // case "Lists":
        //   return <Lists {...props} />;
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
        case "StudentAssignment":
          return <StudentAssignment {...props} />;
        default:
          return null;
      }
    }else if(props.role === "teacher"){
      switch (blockName) {
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
        case "StudentAssignment":
          return <StudentAssignment {...props} />;
        default:
          return null;
      }
    }else{
      switch (blockName) {
        
        // TODO: Depreciated usage
        // case "Lists":
        //   return <Lists {...props} />;
        case "Profile":
          return <Profile {...props} />;
        case "UserChangePassword":
          return (
            <Button type={"UserChangePassword"} />
          );
        case "AdminCreateTeacher":
          return (
            <Button type={"AdminCreateTeacher"} />
          );
        case "Context":
          return <HalfContext {...props} />;
        default:
          return null;
      }
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <Detail {...props} />
      </div>
      <div className={styles.functionalComponent}>
        {renderBlock(props.type)}
      </div>
    </div>
  );
}

const mapStateToProps = state =>({
  role:state.userRole
})

const HalfWidthLayoutContainer = connect(mapStateToProps, null)(HalfWidthLayout);

export default HalfWidthLayoutContainer;
