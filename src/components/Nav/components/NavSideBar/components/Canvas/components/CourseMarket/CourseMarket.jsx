import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getSubjectList from './../../../../../../../../apis/getSubjectList';
import styles from "./CourseMarket.module.scss";

class CourseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      loading: true,
    };
    this.finishLoading = this.finishLoading.bind(this);
  }

  finishLoading() {
    this.setState({ loading: false });
  }

  async getSubjectList() {
    const {subjectList} = await getSubjectList();
      this.setState(
      {subjectList: subjectList,
      loading: false}
      );
  }

  componentDidMount() {
    this.getSubjectList();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <CanvasLoading />
        ) : (
          <RenderLink
            RenderArray={this.state.subjectList}
            CurrentNavItem={"SubjectCourse"}
          /> 
        )}
      </div>
    );
  }
};


export default CourseMarket;
