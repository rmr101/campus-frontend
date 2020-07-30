import React from "react";
import styles from "./FormLayout.module.scss";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const FormTitle = ({ children }) => (
  <div className={styles.title}>{children}</div>
);



export const FormItem = ({ children }) => (
  <div className={styles.item}>{children}</div>
);

export const SearchBtn = (props) => (
  <button data-testid="searchBtn" {...props} className={styles.searchBtn}>
    <FontAwesomeIcon icon={faSearch} />
  </button>
);

export const AddBtn = (props) => (
         <button
           data-testid="addBtn"
           {...props}
           className={styles.searchBtn}
         >
           <FontAwesomeIcon icon={faPlus} />
         </button>
       );

export const SearchRow = ({ children }) => (
  <div className={styles.searchRow}>{children}</div>
);

export const HorizontalRow = ({ children }) => (
  <div className={styles.horizontalRow}>{children}</div>
);


export const DummyButtonBlock = ({ children }) => (
  <div className={styles.inactiveBlock}>{children}</div>
);



export const Button = ({ children, className, ...props }) => (
  <button
    className={styles.btn + " " + styles[className]}
    {...props}
    data-testid="btn"
  >
    {children}
  </button>
);

export const FormLayout = ({ children, className, ...props }) => (
  <form
    className={styles[className] + " " + styles.form}
    {...props}
    data-testid="form"
  >
    {children}
  </form>
);



export const InFormLayout = ({ children, className, ...props }) => (
         <div
           data-testid="inform"
           className={styles[className] + " " + styles.form}
           {...props}
         >
           {children}
         </div>
       );

InFormLayout.propTypes = {
  className:PropTypes.string
};

export const SmallText = ({ children, className, searchBar }) => (
  <small
    data-testid="small-test"
    className={`${styles[className]} ${searchBar ? styles.searchSmall : null}`}
  >
    {children}
  </small>
);


