import React from "react";
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from "./../../../../../../apis/getCourseListBySubjectID";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import CourseManagement from '../CourseManagement';
import { connect } from "react-redux";
import NoContent from "../NoContent";
import CourseForm from "../CourseForm";
import pagination from "../../../../../../utils/Algorithm/pagination";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  Page,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";

const ITEM_PER_PAGE = 8;

class SubjectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      paginationArray: [],
      subjectId: 0,
      courseList: null,
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page) {
    this.setState({ page });
  }
  async getCourseList() {
    this.setState({
      page: 1,
      loading: true,
    });
    const { courseList } = await getCourseListBySubjectID(this.props.id);
    this.setState({
      courseList: courseList,
      paginationArray: pagination(courseList, ITEM_PER_PAGE),
      loading: false,
    });
  }
  handleSubmit(){
    this.getCourseList();
  }
  componentDidUpdate() {
    if (this.state.subjectId !== this.props.id) {
      this.setState({ subjectId: this.props.id }, () => this.getCourseList());
    }
  }
  componentDidMount() {
    this.getCourseList();
  }

  renderCoursesList() {
    const {page,paginationArray} = this.state;
    let array = paginationArray[page-1];
    return array.map((obj, index) => {
      let { name, id, courseCode ,year , semester} = obj;
      let RenderObj = {
        index: index,
        name: name,
        id: id,
        a_courseCode: courseCode,
        b_semester: semester,
        c_year:year
      };
      return (
        <RenderContentLink
          key={"SubjectCourse" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"CourseDetail"}
        />
      );
    });
  }
  renderContent() {
     const { page, paginationArray } = this.state;
    if (paginationArray.length === 0) {
      return <NoContent text={"No courses under this subject."} />;
    } else {
      return (
        <TableLayout>
          <HeaderRow>
            <IndexItem>No:</IndexItem>
            <TableItem>Name:</TableItem>
            <TableItem>Code:</TableItem>
            <TableItem>Semester:</TableItem>
            <TableItem>Year:</TableItem>
          </HeaderRow>
          {this.renderCoursesList()}
          <Page
            currentPage={page}
            handlePageChange={this.handlePageChange}
            totalPage={paginationArray.length}
          />
        </TableLayout>
      );
    }
  }

  render() {
    const {role,id} = this.props;
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderContent()}
        </FullWidthLayout>
        <CourseManagement title="Search In Course Market"/>
        {role === "ADMIN" ? (
          <CourseForm
            subjectId={id}
            handleSubmit={this.handleSubmit}
            apiMethod={"POST"}
            title={"Post New Course"}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  role: state.Authentication.role,
});
const SubjectCourseContainer = connect(mapStateToProps)(SubjectCourse);
export default SubjectCourseContainer;
