import React from "react";
import pagination from "../../../../../../utils/Algorithm/pagination";
import sortArrayByDueDate from "../../../../../../utils/Algorithm/sortArrayByDueDate";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";
import NoContent from '../NoContent';
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
  Page,
} from "../../../../../Layout/TableLayout/TableLayout";

const ITEM_PER_PAGE = 8;

class TeacherMarkingSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginationArray: [],
      courseAssignmentId: 0,
      assignmentList: null,
      loading: true,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page });
  }
  async getAssignmentList() {
    this.setState({
      page: 1,
      loading: true,
    });
    const { assignmentList } = await getAssignmentListByCourse(this.props.id);
    this.setState({
      assignmentList: assignmentList,
      paginationArray: pagination(
        sortArrayByDueDate(assignmentList),
        ITEM_PER_PAGE
      ),
      loading: false,
    });
  }
  componentDidUpdate() {
    if (this.state.courseAssignmentId !== this.props.id) {
      this.setState(
        {
          courseAssignmentId: this.props.id,
        },
        () => this.getAssignmentList()
      );
    }
  }
  componentDidMount() {
    this.getAssignmentList();
  }

  renderAssignmentList() {
    const { page, paginationArray } = this.state;
    if (paginationArray.length === 0) {
      return (
        <NoContent text={"You have no assignment to be marked"} /> 
      );
    } 
    else {
      let array = paginationArray[page - 1];
      return [
        ...array.map((obj, index) => {
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
        }),
        <Page
          key={"TeacherCourseAssignment" + Math.random()}
          currentPage={page}
          handlePageChange={this.handlePageChange}
          totalPage={paginationArray.length}
        />,
      ];
    }
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
