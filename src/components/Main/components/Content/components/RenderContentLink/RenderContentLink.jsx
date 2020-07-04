import React from "react";
import styles from "./RenderContentLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "./../../../../../../store/campus/actions/AddHeader";

// Refactor to be less depended on the RenderArray.
const RenderContentLink = ({ 
  onClick, 
  RenderArray, 
  CurrentItem }) => {
  return RenderArray.map((obj) => (
    <div key={"name_" + Math.random()} className={styles.container}>
      <div
        onClick={(e) => onClick(e, obj.name, CurrentItem, obj.id)}
        className={`${styles.links} ${styles.heading}`}
      >
        {obj.name}
      </div>
      <div className={styles.heading}>{obj.id}</div>
      <div className={styles.heading}>{obj.introduction}</div>
    </div>
  ));
};


const mapDispatchToProps = (dispatch) => ({
  onClick: (event, headingTitle, contentType, id) => {
    dispatch(AddHeader(event, headingTitle, contentType, id));
  },
});

const RenderContentLinkContainer = connect(
  null,
  mapDispatchToProps
  
)(RenderContentLink);



export default RenderContentLinkContainer;
