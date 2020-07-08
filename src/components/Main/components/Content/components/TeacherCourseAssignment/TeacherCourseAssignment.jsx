import React from "react";
import styles from "./TeacherCourseAssignment.module.scss";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";

class TeacherCourseAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseAssignmentId: 0,
      assignmentList: null,
      loading: true,
    };
  }

  componentDidUpdate() {
    if (this.state.courseAssignmentId !== this.props.id) {
      this.setState({ courseAssignmentId: this.props.id }, () =>
        this.getAssignmentListByCourse()
      );
    }
  }
  async getCourseList() {
    await this.setState({
      loading: true,
    });
    const { courseList } = await getAssignmentListByCourse(this.props.id);
    this.setState({
      courseList: courseList,
      loading: false,
    });
  }
  componentDidMount() {
    this.getAssignmentListByCourse();
  }

  renderAssignmentList() {
    let array = this.state.assignmentList;
    return array.map((obj) => {
      // TODO: 后端乱加column 这里也会炸
      let { name, id } = obj;
      let RenderObj = {
        name: name,
        id: id,
      };
      //TODO: subjectID is useless
      return (
        <RenderContentLink
          key={"TeacherCourseAssignment" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"TeacherAssignment"}
        />
      );
    });
  }

  render() {
    return (
      <FullWidthLayout>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.heading}>Assignment Name:</div>
            <div className={styles.heading}>Assignment ID:</div>
          </div>
          {this.state.loading ? <Loading /> : this.renderAssignmentList()}
        </div>
      </FullWidthLayout>
    );
  }
}


const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const TeacherCourseAssignmentContainer = connect(mapStateToProps)(
  TeacherCourseAssignment
);
export default TeacherCourseAssignmentContainer;