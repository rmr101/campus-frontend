import React from "react";
import styles from "./RenderContentLink.module.scss";
import { connect } from "react-redux";
import ClickLink from './../../../../../../store/campus/actions/ClickLink';

// Refactor to be less depended on the RenderArray.
const RenderContentLink = ({ 
  onClick, 
  RenderArray, 
  CurrentItem }) => {
  return RenderArray.map((obj) => (
    <div key={"name_" + Math.random()} className={styles.container}>
      <div
        onClick={(e) => onClick(e, obj.name, obj.id, CurrentItem)}
        className={`${styles.links} ${styles.heading}`}
      >
        {obj.name}
      </div>
      <div className={styles.heading}>
        {obj.id}
      </div>
      <div className={styles.heading}>
        {obj.introduction}
      </div>
    </div>
  ));
};


const mapDispatchToProps = (dispatch) => ({
  onClick: (event, headingTitle, id, LinkNameID) => {
    dispatch(ClickLink(event, headingTitle, id, LinkNameID));
  },
});

const RenderContentLinkContainer = connect(
  null,
  mapDispatchToProps
  
)(RenderContentLink);



export default RenderContentLinkContainer;
