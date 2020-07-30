import React from "react";
import styles from "./HalfWidthLayout.module.scss";
import PropTypes from "prop-types";


const Detail = ({ title, description }) => {
  return (
    <div className={styles.detailWrapper}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const HalfWidthLayout = ({ title, children, description, ...rest }) => (
  <div className={styles.wrapper}>
    <div className={styles.heading}>
      <Detail title={title} description={description} />
    </div>
    <div
      data-testid="content"
      className={
        rest.hasOwnProperty("background") ? styles.functionalComponent : null
      }
    >
      {children}
    </div>
  </div>
);

HalfWidthLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};


export default HalfWidthLayout;
