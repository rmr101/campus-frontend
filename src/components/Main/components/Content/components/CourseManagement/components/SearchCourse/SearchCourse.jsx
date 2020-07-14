import React from "react";
import styles from "./SearchCourse.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearchByTemp = (e) => {
    this.props.onSearchByChange(e.target.value);
  };

  handleSearchTemp = (e) => {
    this.props.onSearchChange(e.target.value);
  };


  render() {
    console.log(this.props.searchBy);
    console.log(this.props.search);
    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.innerform}>
            <select value={this.props.searchBy} onChange={this.handleSearchByTemp}>
              <option value="Course Name">Course Name</option>
              <option value="Course ID">Course ID</option>
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

export default SearchCourse;
