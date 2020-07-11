import React from "react";
import styles from "./RenderContentLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "./../../../../../../store/campus/actions/AddHeader";


const sortInRenderOrder=(unordered)=>{
  const ordered = {};
  Object.keys(unordered)
    .sort()
    .forEach((key) => 
      ordered[key] = unordered[key]
    );
  return ordered;
}
const renderRest = (rest) => {
    let result = [];
    for (let props in rest) {
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

const RenderContentLink = ({ onClick, RenderObj, toPageID}) => {
  let { disable,name, id, secondID, ...rest } = RenderObj;
  rest = sortInRenderOrder(rest);
  return (
    <div key={"name_" + Math.random()} className={styles.container}>
      <div
        onClick={(e) => {
          e.preventDefault();
          return !disable ? onClick(name, toPageID, id, secondID) : null;
        }}
        className={`${styles.heading} ${disable?null:styles.links}`}
      >
        {name}
      </div>
      <div className={styles.heading}>{id}</div>
      {renderRest(rest)}
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onClick: (headingTitle, contentType, id, secondID) => {
    dispatch(AddHeader(headingTitle, contentType, id, secondID));
  },
});

const RenderContentLinkContainer = connect(
  null,
  mapDispatchToProps
  
)(RenderContentLink);



export default RenderContentLinkContainer;
