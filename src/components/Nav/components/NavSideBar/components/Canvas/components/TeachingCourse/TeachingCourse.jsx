import React from 'react';
import RenderLink from '../RenderLink';
import CanvasLoading from '../CanvasLoading';
import getTeachingList from "../../../../../../../../apis/getTeachingList";
import styles from "./TeachingCourse.module.scss";
import NothingDisplay from '../NothingDisplay';

//TODO: configure for this 
class TeachingCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachingList: null,
      loading: true,
    };
    this.finishLoading = this.finishLoading.bind(this);
  }

  finishLoading() {
    this.setState({ loading: false });
  }

  async getTeachingList() {
    const resp = await getTeachingList();
    // TODO: Protect from breaking the app
    const teachingList = resp ? resp.courseList : [{}];
    console.log(teachingList);
    this.setState({ teachingList: teachingList, loading: false });
  }

  componentDidMount() {
    this.getTeachingList();
  }
  // specific tailored for the RenderLink component
  // TODO: incase the backend has inconsistent string use.
  MapToRenderArray(array) {
    return array.map((obj) => ({
      name: obj.name,
      id: obj.id,
    }));
  }
  renderList(){

    return this.state.teachingList.length !== 0 ? 
          <RenderLink
            RenderArray={this.MapToRenderArray(this.state.teachingList)}
            CurrentNavItem={"TeachingCourse"}
          /> : 
          <NothingDisplay name={"Teaching Courses"}/>
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
