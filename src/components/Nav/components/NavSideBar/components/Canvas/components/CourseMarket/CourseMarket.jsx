import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getSubjectList from './../../../../../../../../apis/getSubjectList';
import styles from "./CourseMarket.module.scss";
import CanvasTitleWrap from '../CanvasTitleWrapper';

class CourseMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectList: null,
      loading: true,
    };
  }

  async getSubjectList() {
    const { subjectList } = await getSubjectList();
    this.setState({ subjectList: subjectList, loading: false });
  }

  componentDidMount() {
    this.getSubjectList();
  }
  MapToRenderArray(array) {
    return array.map((obj) => ({
      name: obj.name,
      id: obj.id,
    }));
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <CanvasLoading />
        ) : (
          <CanvasTitleWrap title={"Subjects"}>
            <RenderLink
              RenderArray={this.MapToRenderArray(this.state.subjectList)}
              toPageID={"SubjectCourse"}
            />
          </CanvasTitleWrap>
        )}
      </div>
    );
  }
};


export default CourseMarket;
