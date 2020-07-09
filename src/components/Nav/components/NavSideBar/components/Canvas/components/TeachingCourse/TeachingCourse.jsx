import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getTeachingList from "../../../../../../../../apis/getTeachingList";
import styles from "./TeachingCourse.module.scss";
import NothingDisplay from '../NothingDisplay';
import CanvasTitleWrap from '../CanvasTitleWrapper';

//TODO: configure for this 
class TeachingCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachingList: null,
      loading: true,
    };
  }


  async getTeachingList() {
    const resp = await getTeachingList();
    // TODO: Protect from breaking the app
    const teachingList = resp.hasOwnProperty("courseList") ? resp.courseList : [];
    this.setState({ teachingList: teachingList, loading: false });
  }

  componentDidMount() {
    this.getTeachingList();
  }

  MapToRenderArray(array) {
    return array.map((obj) => {
      return {
      name: obj.name,
      id: obj.id,
    }
  });
  }
  renderList(){

    return this.state.teachingList.length !== 0 ? (
      <CanvasTitleWrap title={"Your Teaching"}>
        <RenderLink
          RenderArray={this.MapToRenderArray(this.state.teachingList)}
          toPageID={"TeacherCourseAssignment"}
        />
      </CanvasTitleWrap>
    ) : (
      <NothingDisplay name={"Teaching Courses"} />
    );
  }
  render() {
    return (
      <div className={styles.wrapper}>
        {this.state.loading ? (
          <CanvasLoading />
        ) : 
          this.renderList()
          }
      </div>
    );
  }
};


export default TeachingCourse;
