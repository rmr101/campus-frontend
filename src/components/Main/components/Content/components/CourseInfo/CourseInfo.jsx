import React from "react";
import Loader from "../../../../../Loader";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import styles from "./CourseInfo.module.scss";
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
        subjectId: this.props.subjectId,
      },
      year,
      semester,
      postSuccessful: false,
      loading: false,
      notNullableError: "",
    };
    console.log(this.props.id);
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangWorkload = this.onChangWorkload.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);
    // this.onChangeLearningOutcome = this.onChangeLearningOutcome.bind(this);
    // this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
    // this.getCourse = this.getCourse.bind(this);
    // this.updateCourse = this.updateCourse.bind(this);
    // this.deleteCourse = this.deleteCourse.bind(this);
  }

  checkNull() {
    const {
      postSuccessful,
      loading,
      notNullableError,
      workLoad,
      year,
      semester,
      subjectId,
      ...checkProps
    } = this.state;
    for (let prop in checkProps) {
      if (!checkProps[prop].trim()) {
        this.setState({ notNullableError: "Not empty input is allowed." });
      }
    }
  }
  handleValueChange(name) {
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
          notNullableError: "",
        },
        this.checkNull
      );
    };
  }

  async getCourse() {
      const { course } = await getCourseDetail(this.props.id);
      console.log(course);
      this.setState(
        {
          currentCourse: course,
        }
      );
      console.log(this.state.currentCourse.name);
  }

  componentDidMount() {
    this.getCourse();
  }

  async postCourse() {
    const {
      loading,
      postSuccessful,
      notNullableError,
      ...postBody
    } = this.state;
    this.setState({
      loading: true,
    });
    await postCourse(postBody)
      .then(() => {
        this.setState(
          {
            loading: false,
            postSuccessful: true,
          },
          () => {
            this.props.handleSubmit();
            setTimeout(() => this.setState({ postSuccessful: false }), 2000);
          }
        );
      })
      .catch(console.log);
  }

  onSubmit() {
    this.postCourse();
  }

  render() {
    return (
      <FullWidthLayout>
        <FormLayout
          className={this.state.postSuccessful ? "successful" : null}
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          {this.state.loading ? (
            <LoaderContainer background>
              <Loader />
            </LoaderContainer>
          ) : null}

          <FormTitle>Post New Course</FormTitle>
          <HorizontalRow>
            <FormItem>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                value={this.state.currentCourse.name}
                placeholder="Enter name for the course"
                maxLength={30}
                required
                onChange={(event) => this.handleValueChange("name")(event)}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="workLoad">Course points:</label>
              <select
                onChange={(event) => this.handleValueChange("workLoad")(event)}
                required
                id="workLoad"
                value={this.state.currentCourse.workLoad}
              >
                <option value={12.5}>12.5</option>
                <option value={25}>25</option>
                <option value={37.5}>37.5</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </FormItem>
          </HorizontalRow>
          <HorizontalRow>
            <FormItem>
              <label> Year: </label>
              <div>{year}</div>
            </FormItem>
            <FormItem>
              <label> Semester: </label>
              <div>{semester}</div>
            </FormItem>
          </HorizontalRow>
          <FormItem>
            <label htmlFor="location">Location: </label>
            <input
              id="location"
              type="text"
              value={this.state.currentCourse.location}
              placeholder="Enter location for the course"
              maxLength={30}
              required
              onChange={(event) => this.handleValueChange("location")(event)}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="outcome">Learning Outcome: </label>
            <textarea
              id="outcome"
              className={styles.outcome}
              value={this.state.currentCourse.outcome}
              placeholder="Enter learning outcomes"
              required
              onChange={(event) => {
                this.handleValueChange("learningOutcome")(event);
              }}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="assessment">Assessments: </label>
            <textarea
              id="assessment"
              className={styles.content}
              value={this.state.currentCourse.assessment}
              placeholder="Enter assessments for the course"
              required
              onChange={(event) => {
                this.handleValueChange("assessment")(event);
              }}
            />
          </FormItem>
          <FormItem>
            <label htmlFor="Intro">Introduction: </label>
            <textarea
              id="Intro"
              className={styles.intro}
              value={this.state.currentCourse.Introduction}
              placeholder="Enter introduction for the course"
              required
              onChange={(event) => {
                this.handleValueChange("introduction")(event);
              }}
            />
          </FormItem>
          {!this.state.notNullableError ? (
            <Button type="submit">Update Course</Button>
          ) : (
            <DummyButtonBlock>Unable to Click</DummyButtonBlock>
          )}
          {this.state.postSuccessful ? (
            <SmallText>Successful.</SmallText>
          ) : null}
          {this.state.notNullableError ? (
            <SmallText className={"error"}>
              {this.state.notNullableError}
            </SmallText>
          ) : null}
        </FormLayout>
      </FullWidthLayout>
    );
  }
}
const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const CourseInfoContainer = connect(mapStateToProps)(CourseInfo);
export default CourseInfoContainer;
