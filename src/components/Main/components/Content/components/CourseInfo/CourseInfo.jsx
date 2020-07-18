import React from "react";
import Loader from "../../../../../Loader";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import styles from "./CourseInfo.module.scss";
import CourseForm from "../CourseForm";
import getCourseDetail from "../../../../../../apis/getCourseDetail";
import postCourse from "../../../../../../apis/postCourse";
import LoaderContainer from "../../../../../Layout/LoaderContainer";
import {
  FormLayout,
  FormTitle,
  FormItem,
  HorizontalRow,
  Button,
  DummyButtonBlock,
  SmallText,
} from "../../../../../Layout/FormLayout/FormLayout";
import { connect } from "react-redux";

const date = new Date();
const year = date.getFullYear();
const semester = date.getMonth() < 7 ? 1 : 2;

class CourseInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: {
        name: "",
        workLoad: "",
        location: "",
        learningOutcome: "",
        assessment: "",
        introduction: "",
      },
      loading: true,
      year,
      semester,
    };
    console.log(this.props.id);
  }

  async getCourse() {
    const { course } = await getCourseDetail(this.props.id);
    console.log(course);
    this.setState({
      currentCourse: course,
      loading: false,
    });
    console.log(this.state.currentCourse);
  }

  componentDidMount() {
    this.getCourse();
  }

  handleSubmit() {
    this.getCourse();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <LoaderContainer background>
            <Loader />
          </LoaderContainer>
        ) : (
          <CourseForm
            courseId={this.state.id}
            handleSubmit={this.handleSubmit}
            apiMethod={"PUT"}
            title={"Course Detail"}
            items={this.state.currentCourse}
            name={this.state.currentCourse.name}
            btn={"Update"}
          />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const CourseInfoContainer = connect(mapStateToProps)(CourseInfo);
export default CourseInfoContainer;
