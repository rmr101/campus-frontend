import React from "react";
import styles from "./Header.module.scss";
import Button from "../../../Button";
import PropTypes from 'prop-types';

const Header = ({
  title,
  }) => (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
        <Button type={"LOGOUT"} />
    </div>
  );

  Header.propTypes = {
    title: PropTypes.string
  }


export default Header;
