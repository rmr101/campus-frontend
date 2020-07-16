import React from "react";
import {DisplayTitle,DisplaySubHeading,DisplayContent,DisplayLayout} from '../../../../../Layout/DisplayContentLayout/DisplayContentLayout';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import getCourseDetail from '../../../../../../apis/getCourseDetail';
import Loading from '../Loading';
import StudentEnrolCourse from './StudentEnrolCourse';
import { connect } from "react-redux";

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      courseDetail: null,
      loading: true,
      enrolled: false,
    };
    this.handleEnrol = this.handleEnrol.bind(this);
  }
  handleEnrol() {
    this.setState({ enrolled: true });
  }
  componentDidMount() {
    this.getCourseDetail();
  }
  async getCourseDetail() {
    const { course, studentList } = await getCourseDetail(this.props.id);
    this.setState(
      {
        studentList,
        courseDetail: course,
        loading: false,
      },
      this.checkEnrollment
    );
  }
  checkEnrollment() {
    const { studentList } = this.state;
    const { uuid } = this.props;
    studentList.forEach((student) =>
      student.uuid === uuid ? this.setState({ enrolled: true }) : null
    );
  }
  renderCourseDetail() {
    const {
      year,
      assessment,
      learningOutcome,
      courseCode,
      workLoad,
      location,
      name,
      introduction,
      semester,
    } = this.state.courseDetail;
    return (
      <DisplayLayout>
        <DisplayTitle>
          {courseCode} - {name}
        </DisplayTitle>
        <DisplaySubHeading>
          {" "}
          {year} {location}{" "}
        </DisplaySubHeading>
        <DisplaySubHeading>Semester: </DisplaySubHeading>
        <DisplayContent> {semester} </DisplayContent>
        <DisplaySubHeading>Credit Points: </DisplaySubHeading>
        <DisplayContent> {workLoad} </DisplayContent>
        <DisplaySubHeading>Course Introduction: </DisplaySubHeading>
        <DisplayContent> {introduction} </DisplayContent>
        <DisplaySubHeading>Learning Outcomes: </DisplaySubHeading>
        <DisplayContent> {learningOutcome} </DisplayContent>
        <DisplaySubHeading>Assessments: </DisplaySubHeading>
        <DisplayContent> {assessment} </DisplayContent>
      </DisplayLayout>
    );
  }

  render() {
    const { userRole, id } = this.props;
    const { enrolled } = this.state;
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderCourseDetail()}
        </FullWidthLayout>
        {userRole === "STUDENT" ? (
          <StudentEnrolCourse
            id={id}
            enrolled={enrolled}
            handleEnrol={this.handleEnrol}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  userRole: state.Authentication.role,
  uuid:state.Authentication.uuid,
});
const CourseDetailContainer = connect(mapStateToProps)(CourseDetail);
export default CourseDetailContainer;
