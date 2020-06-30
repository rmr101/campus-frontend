import React from 'react';
import axios from 'axios';
import styles from './SubjectCourse.module.scss';
import RenderLink from './../../../../../Nav/components/NavSideBar/components/Canvas/components/RenderLink';

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
    await axios
      .get(`http://localhost:8080/subjects/${this.props.subjectID}`)
      .then((res) =>
        this.setState({ courseList: res.data.courseList }, () =>
          this.setState({ loading: false })
        )
      );
    console.log(this.state.courseList);
  }
  componentDidMount() {
    this.getCourseList();
  }

  render() {
    return this.state.loading ? (
      //TODO: 可复用 loading
      <Loading />
    ) : (
      //TODO: 提出来，Nav 和 main 都能用
      <RenderLink
        onClick={this.props.onClick}
        RenderArray={this.state.courseList}
      />
    );
  }
};

export default SubjectCourse;
