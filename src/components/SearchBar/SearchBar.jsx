import React from "react";
import styles from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRoleTemp = (e) => {
    this.props.onRoleChange(e.target.value);
  };

  handleSearchTemp = (e) => {
    this.props.onSearchChange(e.target.value);
  };


  render() {
    console.log(this.props.role);
    console.log(this.props.search);
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.innerform}>
            <select value={this.props.role} onChange={this.handleRoleTemp}>
              <option value="student">student</option>
              <option value="teacher">teacher</option>
            </select>
          </div>
          <div className={styles.innerform}>
            <input
              placeholder="Enter ID or Name..."
              type="text"
              value={this.props.search}
              onChange={this.handleSearchTemp}
            />
            <span className={styles.errors}>{this.props.errors}</span>
          </div>
          <div onClick={this.props.onClick} className={styles.button}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
