import React from 'react';
import styles from './SubjectCourse.module.scss';
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from './../../../../../../apis/getCourseListBySubjectID';
import Loading from '../Loading';
import FullWidthLayout from "../FullWidthLayout";
import {connect} from 'react-redux';

//TODO: 要用thunk
// 下面的state change 他就会re-render了
class SubjectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null,
      loading: true,
    };
  }

  async getCourseList(id) {
    const resp = await getCourseListBySubjectID(id);
    const courseList = resp ? resp.courseList : [];
    console.log(resp);
    this.setState({
      courseList: courseList,
      loading: false,
    });
  }

  componentDidMount() {
    this.getCourseList(this.props.id);
  }

  renderCoursesList() {

    let array = this.state.courseList;
    return array.map((obj) => {
      let { name, id, subjectId, ...rest } = obj;
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
          <div className={styles.heading}>Introduction:</div>
        </div>
          {this.state.loading ? (
            <Loading /> ) : (this.renderCoursesList())}
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
