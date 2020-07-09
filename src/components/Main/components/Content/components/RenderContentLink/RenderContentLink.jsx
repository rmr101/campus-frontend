import React from "react";
import styles from "./RenderContentLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "./../../../../../../store/campus/actions/AddHeader";


const renderRest = (rest) => {
    let result = [];
    for (let props in rest) {
      console.log(rest);
      result.push(renderColumn(rest[props]));
    }
    return result;
  };

const renderColumn = (detail) => {
  return (
    <div key={detail + Math.random()} className={styles.heading}>
      {detail}
    </div>
  );
};

const RenderContentLink = ({ onClick, RenderObj, toPageID }) => {
  
  const { name, id, ...rest } = RenderObj;
  renderRest(rest);

    return (
      <div key={"name_" + Math.random()} className={styles.container}>
        <div
          onClick={(e) => {
            e.preventDefault();
            onClick(name, toPageID, id);
          }}
          className={`${styles.links} ${styles.heading}`}
        >
          {name}
        </div>
        <div className={styles.heading}>{id}</div>
        {renderRest(rest)}
      </div>
    );
  };


const mapDispatchToProps = (dispatch) => ({
  onClick: (headingTitle, contentType, id) => {
    dispatch(AddHeader(headingTitle, contentType, id));
  },
});

const RenderContentLinkContainer = connect(
  null,
  mapDispatchToProps
  
)(RenderContentLink);



export default RenderContentLinkContainer;
