import React from "react";
import studentService from "../../../../../../apis/studentService";
import styles from "./TeacherAssignment.module.scss";

//TODO: Update assignment is needed.
class TeacherAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    studentService
      .getAll()
      .then((response) => {
        this.setState({
          students: response.data.studentList,
        });
        console.log(this.state.students);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <label className={styles.label}>Please select: </label>
        <div className={styles.wrapper}>

        </div>
      </div>
    );
  }
}

export default TeacherAssignment;
