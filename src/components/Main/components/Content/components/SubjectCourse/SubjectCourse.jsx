import React from "react";
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from "./../../../../../../apis/getCourseListBySubjectID";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";
import NoContent from "../NoContent/NoContent";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";

class SubjectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectId: 0,
      courseList: null,
      loading: true,
    };
  }

  async getCourseList() {
    this.setState({
      loading: true,
    });
    const { courseList } = await getCourseListBySubjectID(this.props.id);
    this.setState({
      courseList: courseList,
      loading: false,
    });
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
    let array = this.state.courseList;
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
          toPageID={"Course"}
        />
      );
    });
  }
  renderContent() {
    if (this.state.courseList.length === 0) {
      return <NoContent text={"No courses under this subject."} />;
    } else {
      return (
        <TableLayout>
          <HeaderRow>
            <IndexItem> No:</IndexItem>
            <TableItem>Course Name:</TableItem>
            <TableItem>Course ID:</TableItem>
            <TableItem>Semester:</TableItem>
            <TableItem>Year:</TableItem>
          </HeaderRow>
          {this.renderCoursesList()}
        </TableLayout>
      );
    }
  }

  render() {
    return (
      <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderContent()}
      </FullWidthLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const SubjectCourseContainer = connect(mapStateToProps)(SubjectCourse);
export default SubjectCourseContainer;
