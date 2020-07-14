import React from "react";

import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";



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
    return array.map((obj, index) => {
      let { title, id, dueDate } = obj;
      let RenderObj = {
        index: index,
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
          <TableLayout>
            <HeaderRow>
              <IndexItem>No:</IndexItem>
              <TableItem>Assignment Name:</TableItem>
              <TableItem>Assignment Due:</TableItem>
            </HeaderRow>
            {this.state.loading ? <Loading /> : this.renderAssignmentList()}
          </TableLayout>
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
