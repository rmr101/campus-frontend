import React from 'react';
import getAssignmentDetail from "../../../../../../apis/getAssignmentDetail";
import Loading from '../Loading';
import {connect} from 'react-redux';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout';
import StudentAssignmentUpload from './components/StudentAssignment';
import {DisplayTitle,DisplaySubHeading,DisplayContent,DisplayLayout} from '../../../../../Layout/DisplayContentLayout/DisplayContentLayout';



class Assignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentDetail: null,
      loading: true,
    };
  }
  async getAssignment() {
    const {id,courseID,userRole} = this.props;
    if (userRole === "student") {
      const assignment = await getAssignmentDetail(id, courseID);
        this.setState({
          assignmentDetail: assignment,
          loading: false,
        });
    } else if (userRole === "teacher") {
      const { assignment } = await getAssignmentDetail(id, courseID);
        this.setState({
          assignmentDetail: assignment,
          loading: false,
        });
    }
    
  }
  componentDidMount() {
    this.getAssignment();
  }
  renderAssignmentDetail(){
    const {title,courseName,dueDate,acceptanceCriteria,content}=this.state.assignmentDetail
    console.log(dueDate);
    return (
      <DisplayLayout>
        <DisplayTitle>
          {courseName} - {title}
        </DisplayTitle>
        <DisplaySubHeading>Due on {dueDate} at 11:59 pm </DisplaySubHeading>
        <DisplaySubHeading>Acceptance Criteria: </DisplaySubHeading>
        <DisplayContent> {acceptanceCriteria} </DisplayContent>
        <DisplaySubHeading>Content: </DisplaySubHeading>
        <DisplayContent> {content} </DisplayContent>
      </DisplayLayout>
    );}
  getTodayDate(){
    return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '').split(" ")[0]  
  }
  renderOptionalContent(){
    const today = this.getTodayDate();
    const {dueDate} = this.state.assignmentDetail;
    const {userRole} = this.props
    if (userRole === "student" && today < dueDate) {
      return (
        <HalfWidthLayout
          title={"Upload File"}
          description={"File must be less than 15MB.\nOnly PDF is accepted."}
        >
          <StudentAssignmentUpload />
        </HalfWidthLayout>
      );
    } else {
      return null;
    }
  }
  
  render() {
   
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderAssignmentDetail()}
        </FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderOptionalContent()}
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  userRole : state.Authentication.role.toLowerCase(),
  courseID: state.headerHistory.content.secondID,
});
const AssignmentContainer = connect(mapStateToProps)(Assignment);
export default AssignmentContainer;
