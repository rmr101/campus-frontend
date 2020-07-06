import React from "react";
import styles from "./RenderContentLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "./../../../../../../store/campus/actions/AddHeader";

// Refactor to be less depended on the RenderArray.
// TODO: Content 不刷新现在。
// TODO: Content Link 不负责render
const RenderContentLink = ({ onClick, RenderObj, toPageID }) => {
  
  const renderRest = (rest) => {
    let result = [];
    for (let props in rest) {
      result.push(renderColumn(rest[props]));
    }
    return result;
  };
  const renderColumn = (detail) => (
    <div key={detail + Math.random()} className={styles.heading}>
      {detail}
    </div>
  );
    const { name, id, ...rest } = RenderObj;
    return (
      <div key={"name_" + Math.random()} className={styles.container}>
        <div
          onClick={(e) => onClick(e, name, toPageID, id)}
          className={`${styles.links} ${styles.heading}`}
        >
          {name}
        </div>
        <div className={styles.heading}>
          {id}
        </div>
        {renderRest(rest)}
      </div>)
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
