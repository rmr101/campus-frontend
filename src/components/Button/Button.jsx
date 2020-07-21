import React from "react";
import styles from "./Button.module.scss";
import Popup from "./../Popup";
import LogOutBtn from "./components/LogOutBtn";
import UploadBtn from "./components/UploadBtn";
import MarkingBtn from "./components/MarkingBtn";
import EnrolBtn from "./components/EnrolBtn";
import ChangePasswordBtn from "./components/ChangePasswordBtn";
import ResetPasswordBtn from "./components/ResetPasswordBtn";
import DeleteUserBtn from "./components/DeleteUserBtn";
import ViewReportBtn from "./components/ViewReportBtn";
import AddTeacherToCourseBtn from "./components/AddTeacherToCourseBtn";

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

  renderButton(type) {
    switch (type) {
      case "CHANGE_PASSWORD":
        return (
          <React.Fragment>
            <ChangePasswordBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup type={"CHANGE_PASSWORD"} toggle={this.togglePop} />
            ) : null}
          </React.Fragment>
        );
      case "RESET_PASSWORD":
        return (
          <React.Fragment>
            <ResetPasswordBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                {...this.props}
                type={"RESET_PASSWORD"}
                toggle={this.togglePop}
              />
            ) : null}
          </React.Fragment>
        );
      case "DELETE_USER":
        return (
          <React.Fragment>
            <DeleteUserBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                onSubmit={this.props.redirectToUsrManagement}
                {...this.props}
                type={"DELETE_USER"}
                toggle={this.togglePop}
              />
            ) : null}
          </React.Fragment>
        );
      case "UPLOAD":
        return <UploadBtn {...this.props} />;
      case "LOGOUT":
        return <LogOutBtn />;
      case "ADD_TEACHER_TO_COURSE":
        return (
          <React.Fragment>
            <AddTeacherToCourseBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                type={"ADD_TEACHER_TO_COURSE"}
                {...this.props}
                toggle={() => {
                  this.togglePop();
                }}
              />
            ) : null}
          </React.Fragment>
        );
      case "ENROL":
        return (
          <React.Fragment>
            <EnrolBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                type={"ENROL"}
                {...this.props}
                toggle={() => {
                  this.togglePop();
                }}
              />
            ) : null}
          </React.Fragment>
        );
      case "VIEW_REPORT":
        return (
          <React.Fragment>
            <ViewReportBtn onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                type={"VIEW_REPORT"}
                {...this.props}
                toggle={() => {
                  this.togglePop();
                }}
              />
            ) : null}
          </React.Fragment>
        );

      case "MARKING":
        return (
          <React.Fragment>
            <MarkingBtn {...this.props} onClick={this.togglePop} />
            {this.state.seen ? (
              <Popup
                type={"MARKING"}
                {...this.props}
                toggle={() => {
                  this.props.handleReview();
                  this.togglePop();
                }}
              />
            ) : null}
          </React.Fragment>
        );
      default:
        return null;
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.renderButton(this.props.type)}
      </div>
    );
  }
}

export default Button;
