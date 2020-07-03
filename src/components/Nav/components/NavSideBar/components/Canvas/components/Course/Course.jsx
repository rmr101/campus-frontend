import React from "react";
import RenderLink from "../RenderLink";
import CanvasLoading from "../CanvasLoading";
import getSubjectList from "./../../../../../../../../apis/getSubjectList";

class Course extends React.Component {
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

  getSubjectList() {
    getSubjectList()
      .then((res) =>
        this.setState({ subjectList: res.data, loading: false }, () =>
          console.log(this.state.subjectList)
        )
      )
      .catch((e) => console.log(e));
  }

  componentDidMount() {
    this.getSubjectList();
  }

  render() {
    return this.state.loading ? (
      <CanvasLoading />
    ) : (
      <RenderLink
        RenderArray={this.state.subjectList}
        CurrentNavItem={"SubjectCourse"}
      />
    );
  }
}

export default Course;
