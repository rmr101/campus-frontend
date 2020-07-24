import React from "react";
import styles from "./RenderLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "../../../../../../../../store/campus/actions/AddHeader";
import capitalise from "../../../../../../../../utils/Algorithm/capitalise";

const RenderLink = ({ RenderArray, onClick, toPageID, titleSuffix }) =>
  RenderArray.map((obj) => (
    <div
        data-testid="link"
        onClick={(event) =>{
        event.preventDefault();
        const suffix = titleSuffix ? titleSuffix : "";
        onClick(capitalise((obj.name + " " + suffix).trim()), toPageID, obj.id);
        }
      }
      className={styles.links}
      key={"id" + Math.random()}
    >
      {capitalise(obj.name)}
    </div>
  ));

const mapDispatchToProps = (dispatch) => ({
  onClick: (headingTitle, contentType,id) => {
    dispatch(AddHeader(headingTitle, contentType, id));
  },
});

const RenderLinkContainer = connect(null, mapDispatchToProps)(RenderLink);

export default RenderLinkContainer;