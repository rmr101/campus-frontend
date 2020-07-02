import React from "react";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import ClickHeader from './../../../../store/campus/actions/ClickHeader';

const Header = ({
  title,
  onClick,
  headingID,
  }) => {
    console.log(styles);
  return (
    <div className={styles.wrapper} onClick={(event)=>onClick(event,headingID)}>
      <h2 className={styles.title}>
        {title === "Dashboard" ? (
          title
        ) : (
          <span className={styles.navigator}>&#160;{title} </span>
        )}
        &#160;
      </h2>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>({
  onClick: (event,headingID)=> dispatch(ClickHeader(event,headingID))
})

const HeaderContainer = connect(null,mapDispatchToProps)(Header);

export default HeaderContainer;
