import React from "react";
import pagination from "../../../../../../utils/Algorithm/pagination";
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
      loading: true,
    });
    const { assignmentList } = await getAssignmentListByCourse(this.props.id);
    this.setState({
      assignmentList: assignmentList,
      paginationArray: pagination(assignmentList, ITEM_PER_PAGE),
      loading: false,
    });
  }
  componentDidMount() {
    this.getAssignmentList();
  }

  renderAssignmentList() {
    const {page,paginationArray} = this.state;
    let array = paginationArray[page-1];
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
     const { page, paginationArray } = this.state;
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
            <Page
              currentPage={page}
              handlePageChange={this.handlePageChange}
              totalPage={paginationArray.length}
            />
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
