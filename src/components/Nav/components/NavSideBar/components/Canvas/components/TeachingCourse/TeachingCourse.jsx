import React from "react";
import RenderLink from "../RenderLink";
import getTeachingList from "../../../../../../../../apis/getTeachingList";
import NothingDisplay from "../NothingDisplay";
import CanvasTitleWrap from "../CanvasTitleWrapper";
import LoaderContainer from "../../../../../../../Layout/LoaderContainer";
import Loader from "../../../../../../../Loader";

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
    const teachingList = resp.hasOwnProperty("courseList")
      ? resp.courseList
      : [];
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
      };
    });
  }
  renderList() {
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
      <React.Fragment>
        {this.state.loading ? (
          <LoaderContainer>
            <Loader color={"white"} />
          </LoaderContainer>
        ) : (
          this.renderList()
        )}
      </React.Fragment>
    );
  }
}

export default TeachingCourse;
