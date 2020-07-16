import React from "react";
import styles from "./RenderLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "../../../../../../../../store/campus/actions/AddHeader";


const RenderLink = ({ RenderArray, onClick, toPageID, titleSuffix }) =>
  RenderArray.map((obj) => (
    <div
      onClick={(event) =>{
        event.preventDefault();
        const suffix = titleSuffix ? titleSuffix : "";
        onClick(capitalize((obj.name + " " + suffix).trim()), toPageID, obj.id);
        }
      }
      className={styles.links}
      key={"id" + Math.random()}
    >
      {capitalize(obj.name)}
    </div>
  ));

const capitalize=(name)=>(name[0].toUpperCase() + name.slice(1,name.length))

const mapDispatchToProps = (dispatch) => ({
  onClick: (headingTitle, contentType,id) => {
    dispatch(AddHeader(headingTitle, contentType, id));
  },
});

const RenderLinkContainer = connect(null, mapDispatchToProps)(RenderLink);

export default RenderLinkContainer;