import React from "react";
import styles from "./Popup.module.scss";
import UserChangePassword from "./components/UserChangePassword/UserChangePassword";
import TeacherMarking from "./components/TeacherMarking";
import EnrolCourse from "./components/EnrolCourse";
import ViewReport from "./components/ViewReport";
import AddTeacher from "./components/AddTeacher";
import ResetPassword from "./components/ResetPassword";
import DeleteUser from "./components/DeleteUser";
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderPopupWindow(type) {
    switch (type) {
      case "CHANGE_PASSWORD":
        return <UserChangePassword />;
      case "RESET_PASSWORD":
        return <ResetPassword {...this.props} />;
      case "DELETE_USER":
        return <DeleteUser {...this.props} />;
      case "ADD_TEACHER_TO_COURSE":
        return <AddTeacher {...this.props} onClick={this.props.toggle} />;
      case "ENROL":
        return <EnrolCourse {...this.props} />;
      case "VIEW_REPORT":
        return <ViewReport onClick={this.props.toggle} {...this.props} />;
      case "MARKING":
        return (
          <TeacherMarking onClick={this.props.toggle} id={this.props.id} />
        );
      default:
        return null;
    }
  }
  render() {
    return (
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <span className={styles.close} onClick={this.props.toggle}>
            &times;
          </span>
          {this.renderPopupWindow(this.props.type)}
        </div>
      </div>
    );
  }
}

export default Popup;
