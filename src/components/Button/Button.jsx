import React from "react";
import styles from "./Button.module.scss";
import Popup from "./../Popup";
import LogOutBtn from "./components/LogOutBtn";
import UploadBtn from "./components/UploadBtn";
import MarkingBtn from "./components/MarkingBtn";
//TODO: 这个肯定要重构的，直接return 一个button 就好了，PopUp 也要解耦,应该是属于popup 的功能不应该写进来。
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
    };
    this.togglePop = this.togglePop.bind(this);
  }
  togglePop() {
    this.setState({
      seen: !this.state.seen,
    });
  }
  buttonType(type) {
    console.log(type);
    switch (type) {
      case "DELETE":
        return styles.deleteBtn;
      case "UPDATE":
        return styles.updateBtn;
      case "CREATE":
        return styles.updateBtn;
      case "LOGOUT":
        return styles.logOutBtn;
      // case "AdminCreateTeacher":
        // return styles.createBtn;
      case "CHANGE_PASSWORD":
        return styles.updateBtn;
      default:
        return styles.createBtn;
    }
  }
  renderButton(type) {
    switch (type) {
      case "DELETE":
        return (
          <React.Fragment>
            <button
              className={`${styles.btn} ${this.buttonType("DELETE")}`}
              onClick={this.togglePop}
            >
              Delete
            </button>
            {this.state.seen ? (
              <Popup type={"DELETE"} toggle={this.togglePop} />
            ) : null}
          </React.Fragment>
        );
      case "UPDATE":
        return (
          <React.Fragment>
            <button
              className={`${styles.btn} ${this.buttonType("UPDATE")}`}
              onClick={this.togglePop}
            >
              Update
            </button>
            {this.state.seen ? (
              <Popup type={"UPDATE"} toggle={this.togglePop} />
            ) : null}
          </React.Fragment>
        );
      case "CREATE":
        return (
          <React.Fragment>
            <button
              className={`${styles.btn} ${this.buttonType("CREATE")}`}
              onClick={this.togglePop}
            >
              Create
            </button>
            {this.state.seen ? (
              <Popup type={"CREATE"} toggle={this.togglePop} />
            ) : null}
          </React.Fragment>
        );
      case "CHANGE_PASSWORD":
        return (
          <React.Fragment>
            <button
              className={`${styles.btn} ${this.buttonType("CHANGE_PASSWORD")}`}
              onClick={this.togglePop}
            >
              Change Password
            </button>
            {this.state.seen ? (
              <Popup type={"CHANGE_PASSWORD"} toggle={this.togglePop} />
            ) : null}
          </React.Fragment>
        );
      case "UPLOAD":
        return <UploadBtn {...this.props} />;
      case "LOGOUT":
        return <LogOutBtn />;
      case "MARKING":
        console.log(this.props);
        return (
          <React.Fragment>
            <MarkingBtn {...this.props} onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                type={"MARKING"}
                {...this.props}
                toggle={()=>{
                  this.props.handleReview();
                  this.togglePop()}}
              />
            ) : null}
          </React.Fragment>
        );
        
      case "SEARCH":
        return (
          <div className={styles.searchInput}>
            <label htmlFor="Search">Search by: </label>
            <input
              id="search"
              placeholder="Please Input studentID"
              className={styles.searchInput}
              type="text"
              onChange={this.props.onChange}
            />
            <label htmlFor="OR"> OR: </label>
            <input
              id="search"
              placeholder="Please Input studentName"
              className={styles.searchInput}
              type="text"
              onChange={this.props.onChange}
            />
            <button
              className={`${styles.btn} + ${this.buttonType("SEARCH")}`}
              onClick={this.props.onClick}
            >
              Search
            </button>
          </div>
        );
      default:
        return null;
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>{this.renderButton(this.props.type)}</div>
    );
  }
}

export default Button;
