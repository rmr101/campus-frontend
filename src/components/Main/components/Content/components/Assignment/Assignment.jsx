import React from 'react';
import styles from './Assignment.module.scss';
import getAssignmentDetail from "../../../../../../apis/getAssignmentDetail";
import Loader from '../../../../../Loader';
import {connect} from 'react-redux';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import HalfWidthLayout from '../../../../../Layout/HalfWidthLayout';
import StudentAssignmentUpload from './components/StudentAssignment';

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
    console.log( id, courseID );
    const { assignment } = await getAssignmentDetail(id, courseID);
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
      <div className={styles.wrapper}>
        <div className={styles.title}>
          {courseName} - {title}
        </div>
        <div className={styles.container}>
          <div className={styles.dueDate}>Due: {dueDate} 11:59 pm </div>
          <div className={styles.subHeading}>Acceptance Criteria: </div>
          <p className={styles.paragraph}> {acceptanceCriteria} </p>
          <div className={styles.subHeading}>Content: </div>
          <p className={styles.paragraph}> {content} </p>
        </div>
      </div>
    );}
  

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          {this.state.loading ? (
            <div className={styles.loadingContainer}>
              <Loader />
            </div>
          ) : (
            this.renderAssignmentDetail()
          )}
        </FullWidthLayout>
  {/* TODO: put this back for student */}
        {/* {this.props.userRole === "STUDENT"? */}
        <HalfWidthLayout
          title={"Upload you file"}
          description={
            "File size must be less than 25MB. Only .pdf type is accepted"
          }
        >
          <StudentAssignmentUpload />
        </HalfWidthLayout>
        {/* {/* :null} */} 
      </React.Fragment>
    );
  }
};
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  userRole : state.Authentication.role.toLowerCase(),
  courseID: state.headerHistory.content.courseID,
});
const AssignmentContainer = connect(mapStateToProps)(Assignment);
export default AssignmentContainer;
