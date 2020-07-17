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
    const {id,courseID} = this.props;
    const assignment = await getAssignmentDetail(id, courseID);
    console.log(assignment);
      this.setState({
        assignmentDetail: assignment,
        loading: false,
      });
  }
  componentDidMount() {
    this.getAssignment();
  }
  renderAssignmentDetail(){
    const {title,courseName,dueDate,acceptanceCriteria,content}=this.state.assignmentDetail
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
  
  renderOptionalContent(){
    const { userRole} = this.props
    if ( userRole === "student"){
      return (
      <HalfWidthLayout
          title={"Upload File"}
          description={"File must be less than 25MB and only PDF is accepted."}
        >
          <StudentAssignmentUpload />
      </HalfWidthLayout>)
    } else{
      return null;
    }
  }
  
  render() {
   
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? <Loading /> : this.renderAssignmentDetail()}
        </FullWidthLayout>
        {this.renderOptionalContent()}
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
