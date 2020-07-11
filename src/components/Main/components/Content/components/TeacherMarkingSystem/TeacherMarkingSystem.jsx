import React from "react";
import styles from "./TeacherMarkingSystem.module.scss";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";


//TODO: Can a
class TeacherMarkingSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseAssignmentId: 0,
      assignmentList: null,
      loading: true,
    };
  }

  async getAssignmentList() {
    this.setState({
      loading: true,
    });
    const { assignmentList } = await getAssignmentListByCourse(this.props.id);
    this.setState({
      assignmentList: assignmentList,
      loading: false,
    });
  }
  componentDidMount() {
    this.getAssignmentList();
  }

  renderAssignmentList() {
    let array = this.state.assignmentList;
    return array.map((obj) => {
      let { title, id, dueDate } = obj;
      let RenderObj = {
        name: title,
        id: id,
        secondID: this.props.id,
        dueDate: dueDate + " 11:59 pm ",
      };
      return (
        <RenderContentLink
          key={"TeacherCourseAssignment" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"MarkingAssignment"}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.heading}>Assignment Name:</div>
              <div className={styles.heading}>Assignment ID:</div>
              <div className={styles.heading}>Assignment Due:</div>
            </div>
            {this.state.loading ? <Loading /> : this.renderAssignmentList()}
          </div>
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const TeacherMarkingSystemContainer = connect(mapStateToProps)(
  TeacherMarkingSystem
);
export default TeacherMarkingSystemContainer;
