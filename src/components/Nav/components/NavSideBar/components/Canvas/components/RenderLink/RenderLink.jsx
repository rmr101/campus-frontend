import React from "react";
import styles from "./RenderLink.module.scss";
import { connect } from "react-redux";
import AddHeader from "../../../../../../../../store/campus/actions/AddHeader";


const RenderLink = ({ RenderArray, onClick, toPageID }) =>
  RenderArray.map((obj) => (
    <div
      onClick={(event) =>{
        event.preventDefault();
        onClick(capitalize(obj.name), toPageID, obj.id)
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