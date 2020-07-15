import React from "react";
import {DisplayTitle,DisplaySubHeading,DisplayContent,DisplayLayout} from '../../../../../Layout/DisplayContentLayout/DisplayContentLayout';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import getCourseDetail from '../../../../../../apis/getCourseDetail';
import Loading from '../Loading';
import { connect } from "react-redux";

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetail: null,
      loading: true,
    };
  }
  componentDidMount() {
    this.getCourseDetail()
  }
  async getCourseDetail() {
    const { course } = await getCourseDetail(this.props.id);
    this.setState({
      courseDetail: course,
      loading: false,
    });
  }
    
  renderCourseDetail(){
    const {year,assessment,learningOutcome,courseCode,workLoad,location,name,introduction,semester}=this.state.courseDetail;
      return (
      <DisplayLayout>
        <DisplayTitle>
          {courseCode} - {name} 
        </DisplayTitle>
        <DisplaySubHeading> {year} {location} </DisplaySubHeading>
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
    return (
      <FullWidthLayout>
        {this.state.loading ? <Loading /> : this.renderCourseDetail()}
      </FullWidthLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  userRole: state.Authentication.role.toLowerCase(),
});
const CourseDetailContainer = connect(mapStateToProps)(CourseDetail);
export default CourseDetailContainer;
