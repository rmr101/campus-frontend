import React from 'react';
import styles from "./StudentAssignment.module.scss";
import getStudentAssignmentList from "../../../../../../apis/getStudentAssignmentList";
import Loader from '../../../../../Loader';
import {connect} from 'react-redux';
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import NoContent from '../NoContent/NoContent';
import RenderContentLink from '../RenderContentLink';

class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentList: null,
      loading: true,
    };
  }

  async getAssignmentList() {
    this.setState({
      loading: true,
    });
    const { assignmentList } = await getStudentAssignmentList();
      //
      // TODO: 想测试 empty 的时候 解封这个,{assignmentList:[]};
      // TODO： 还要filter 已经交了的作业
      // TODO: Loader 居中没做。
      // 
      this.setState({
        assignmentList: assignmentList,
        loading: false,
      });
  }

  componentDidMount() {
    this.getAssignmentList();
  }
  renderResult(){
    if (this.state.assignmentList.length ===0){
      return <NoContent text={"You have no assignment to be done."}/>
    } else {
    let renderArray = [
      <div
        className={styles.container}
        key={"StudentAssignment " + Math.random()}
      >
        <div className={styles.heading}>Assignment Name:</div>
        <div className={styles.heading}>Assignment ID:</div>
        <div className={styles.heading}>Assignment Due:</div>
      </div>,
      this.renderAssignmentList(),
    ];
    return renderArray;
  }
  }
  renderAssignmentList() {
    let array = this.state.assignmentList;
    return array.map((obj) => {
      let { id } = obj;
      let { title, dueDate } = obj.assignment;
      let RenderObj = {
        name: title,
        id: id,
        dueDate: dueDate + " 11:59 pm ",
      };

      return (
        <RenderContentLink
          key={"StudentAssignment " + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Assignment"}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          <div className={styles.wrapper}>
            {this.state.loading ? <Loader /> 

            : this.renderResult()}
            
          </div>
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  header: state.headerHistory.title,
});
const StudentAssignmentContainer = connect(mapStateToProps)(
  StudentAssignment
);
export default StudentAssignmentContainer;
