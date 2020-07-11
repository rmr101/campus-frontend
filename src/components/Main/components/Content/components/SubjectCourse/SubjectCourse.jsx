import React from 'react';
import styles from './SubjectCourse.module.scss';
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from './../../../../../../apis/getCourseListBySubjectID';
import Loading from '../Loading';
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import {connect} from 'react-redux';
import NoContent from '../NoContent/NoContent';


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
  componentDidUpdate(){
    if(this.state.subjectId !== this.props.id){
      this.setState({ subjectId: this.props.id }, () => this.getCourseList());
    }
  }
  componentDidMount() {
    this.getCourseList();
  }

  renderCoursesList() {
    let array = this.state.courseList;
    return array.map((obj) => {
      let { name, id, introduction } = obj;
      let RenderObj = {
        name: name,
        id: id,
        introduction,
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
  renderContent(){
    if (this.state.courseList.length === 0) {
      return <NoContent text={"No courses under this subject."}/>
    } else {
      return (
        <React.Fragment>
          <div className={styles.container}>
            <div className={styles.heading}>Course Name:</div>
            <div className={styles.heading}>Course ID:</div>
            <div className={styles.heading}>Course Introduction:</div>
          </div>
          {this.renderCoursesList()}
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <FullWidthLayout>
        <div className={styles.wrapper}>
          {this.state.loading ? <Loading /> : this.renderContent()}
        </div>
      </FullWidthLayout>
    );
  }
};

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const SubjectCourseContainer = connect(mapStateToProps)(SubjectCourse);
export default SubjectCourseContainer;
