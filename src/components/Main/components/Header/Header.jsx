import React from "react";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import Button from "../../../Button";

const Header = ({
  title,
  }) => {
    console.log(styles);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
        <Button type={"LOGOUT"} />
    </div>
  );
}

const mapSateToProps = (state) =>({
  title: state.headerHistory.title,
})

const HeaderContainer = connect(mapSateToProps)(Header);

export default HeaderContainer;
