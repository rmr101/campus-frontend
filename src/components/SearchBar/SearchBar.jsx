import React from "react";
import styles from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.innerform}>
          <select>
            <option value="student">student</option>
            <option value="teacher">teacher</option>
          </select>
        </div>
        <div className={styles.innerform}>
          <input placeholder="Enter ID or Name..." type="text" />
        </div>
        <a
          className={styles.button}
        >
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
