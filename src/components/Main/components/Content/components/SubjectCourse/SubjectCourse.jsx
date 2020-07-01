import React from 'react';
import styles from './SubjectCourse.module.scss';
import RenderContentLink from "./../RenderContentLink";
import getCourseListBySubjectID from './../../../../../../apis/getCourseListBySubjectID';

const Loading = () => (
  <div className={styles.loading}>
    <h4>Loading...</h4>
  </div>
);


class SubjectCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: null,
      loading: true,
    };
    this.finishLoading = this.finishLoading.bind(this);
  }

  finishLoading() {
    this.setState({ loading: false });
  }
  async getCourseList() {
    console.log("i got executed too.");
    const { courseList } = await getCourseListBySubjectID(this.props.subjectID);
    console.log(courseList);
    this.setState({ 
    courseList: courseList,
    loading: false });

    console.log(this.state.courseList);
  }
  
  componentDidMount() {
    this.getCourseList();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          //TODO: 可复用 loading
          <Loading />
        ) : (
          //TODO: 提出来，Nav 和 main 都能用
          <React.Fragment>
            <div className={styles.container}>
              <div className={styles.heading}>Course Name:</div>
              <div className={styles.heading}>Course ID:</div>
              <div className={styles.heading}>Introduction:</div>
            </div>
            <RenderContentLink
              onClick={this.props.onClick}
              RenderArray={this.state.courseList}
              CurrentItem={"Course"}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
};

export default SubjectCourse;
