import React from "react";
import styles from "./TeacherCourseAssignment.module.scss";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import Loading from "../Loading";
import FullWidthLayout from "../FullWidthLayout";


class TeacherCourseAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentList: null,
      loading: true,
    };
  }
  async getAssignmentList() {
    const resp = await getAssignmentListByCourse(this.props.courseID);
    const assignmentList = resp ? resp.assignmentList : [];

    this.setState({
      assignmentList: this.MapToRenderArray(assignmentList),
      loading: false,
    });
  }

  componentDidMount() {
    this.getAssignmentList();
  }
  MapToRenderArray(array) {
    let result = [];
    array.forEach((obj) => {
      //TODO: 应该还有一个 name的 string？？
      const { title, id, dueDate } = obj;
      result.push({
        name: title,
        id: id,
        Due: dueDate,
      });
    });
    console.log(result);
    return result;
  }

  render() {
    return (
      <FullWidthLayout>
        <div className={styles.wrapper}>
          {this.state.loading ? (
            <Loading />
          ) : (
            //TODO: 提出来，Nav 和 main 都能用
            <React.Fragment>
              <div className={styles.container}>
                <div className={styles.heading}>Assignment Title:</div>
                <div className={styles.heading}>Assignment ID:</div>
                <div className={styles.heading}>Due:</div>
              </div>
              <RenderContentLink
                RenderArray={this.state.assignmentList}
                toPageID={"TeacherAssignment"}
              />
            </React.Fragment>
          )}
        </div>
      </FullWidthLayout>
    );
  }
}
export default TeacherCourseAssignment;
