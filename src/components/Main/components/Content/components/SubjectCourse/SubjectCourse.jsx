import React from 'react';
import styles from './SubjectCourse.module.scss';
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from './../../../../../../apis/getCourseListBySubjectID';
import Loading from '../Loading';
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import {connect} from 'react-redux';

//TODO: 要用thunk
// 下面的state change 他就会re-render了
class SubjectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectId: 0,
      courseList: null,
      loading: true,
      mounted: false,
    };
  }

  async getCourseList() {
    await this.setState({
      loading: true,
    });
    const {courseList} = await getCourseListBySubjectID(this.props.id);
    this.setState({
      courseList: courseList,
      loading: false,
    });
  }
  componentDidUpdate(){
    if(this.state.subjectId !== this.props.id){
      this.setState({ subjectId: this.props.id }, () => this.getCourseList());
    }
    console.log(this.state.subjectId);
  }
  componentDidMount() {
    this.getCourseList();
  }

  renderCoursesList() {
    let array = this.state.courseList;
    return array.map((obj) => {
      // TODO: 后端乱加column 这里也会炸
      let { name, id, subjectId, subject,...rest } = obj;
      let RenderObj = {
        name: name,
        id: id,
        ...rest,
      };
      //TODO: subjectID is useless
      return (
        <RenderContentLink
          key={"SubjectCourse" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Course"}
        />
      );
    });
  }

  render() {
    return (
    <FullWidthLayout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>Course Name:</div>
          <div className={styles.heading}>Course ID:</div>
          <div className={styles.heading}>Course Introduction:</div>
        </div>
        {this.state.loading ? <Loading /> : this.renderCoursesList()}
      </div>
      </FullWidthLayout>)
  }
};

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const SubjectCourseContainer = connect(mapStateToProps)(SubjectCourse);
export default SubjectCourseContainer;
