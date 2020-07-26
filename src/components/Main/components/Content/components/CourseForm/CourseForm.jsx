import React from "react";
import Loader from "../../../../../Loader";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import styles from "./CourseForm.module.scss";
import postCourse from "../../../../../../apis/postCourse";
import putCourse from "../../../../../../apis/putCourse";
import LoaderContainer from "../../../../../Layout/LoaderContainer";
import AddTeacherBtn from "../../../../../Button";
import {
  FormLayout,
  FormTitle,
  FormItem,
  HorizontalRow,
  Button,
  DummyButtonBlock,
  SmallText,
} from "../../../../../Layout/FormLayout/FormLayout";

const date = new Date();
const year = date.getFullYear();
const semester = date.getMonth() < 7 ? 1 : 2;

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      notNullableError: "",
      name: null,
      location: null,
      introduction: null,
      assessment: null,
      workLoad: 12.5,
      learningOutcome: null,
      teacherName:"",
      teacherUuid:"",
      year,
      semester,
      subjectId: this.props.subjectId,
      courseId: this.props.courseId,
    };
    this.handleTeacherUuidChange = this.handleTeacherUuidChange.bind(this);
  }
  handleTeacherUuidChange(name,uuid) {
    console.log(name, uuid);
    this.setState({
      teacherUuid: uuid,
      teacherName: name,
      notNullableError: "",
    });
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
      courseId,
      teacherUuid,
      ...checkProps
    } = this.state;
    for (let prop in checkProps) {
      if (!checkProps[prop] || !checkProps[prop].trim()) {
        if (prop === "teacherName"){
          this.setState({ notNullableError: "Must assign a teacher to a course." }); 
        } else {
          this.setState({ notNullableError: "No empty input is allowed." });
        }
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

  sendData(postBody) {
    const { subjectId, courseId,teacherUuid } = this.state;
    switch (this.props.apiMethod) {
      case "POST":
        return postCourse({ ...postBody,teacherUuid, subjectId });
      case "PUT":
        return putCourse({ ...postBody, courseId });
      default:
        return null;
    }
  }
  async postCourse() {
    const {
      postSuccessful,
      loading,
      notNullableError,
      teacherName,
      teacherUuid,
      courseId,
      subjectId,
      ...postBody
    } = this.state;
    this.setState({
      loading: true,
    });
    await this.sendData(postBody)
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

  componentDidMount() {
    // if item exists, populate the state with proper data
    console.log(this.props);
    if (this.props.hasOwnProperty("detail")) {
      const {
        name,
        workLoad,
        location,
        learningOutcome,
        assessment,
        introduction,
        teacherName,
      } = this.props.detail;
      
      this.setState({
        name,
        workLoad,
        location,
        learningOutcome,
        assessment,
        teacherName,
        introduction,
      });
    }
  }

  render() {
    const {
      name,
      workLoad,
      location,
      learningOutcome,
      assessment,
      introduction,
      teacherName,
    } = this.state;
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
          <FormTitle>{this.props.title}</FormTitle>
          <HorizontalRow>
            <FormItem>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                value={name === null ? "" : name}
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
                value={workLoad === null ? "" : workLoad}
                id="workLoad"
              >
                <option value={12.5}>12.5</option>
                <option value={25}>25</option>
                <option value={37.5}>37.5</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </FormItem>
            {this.props.apiMethod === "POST" ? (
              <FormItem>
                <label htmlFor="AddTeacherBtn">Teacher:</label>
                {teacherName ? (
                  <React.Fragment>
                    <div>{teacherName}</div>
                    <AddTeacherBtn
                      name={"Change"}
                      handleAddTeacher={this.handleTeacherUuidChange}
                      id="AddTeacherBtn"
                      type={"ADD_TEACHER_TO_COURSE"}
                    />
                  </React.Fragment>
                ) : (
                  <AddTeacherBtn
                    handleAddTeacher={this.handleTeacherUuidChange}
                    id="AddTeacherBtn"
                    type={"ADD_TEACHER_TO_COURSE"}
                  />
                )}
              </FormItem>
            ) : null}
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
            {this.props.apiMethod === "PUT" ? (
              <FormItem>
                <label>Teacher:</label>
                <div>{teacherName}</div> 
              </FormItem>
                ) : null}
          </HorizontalRow>
          <FormItem>
            <label htmlFor="location">Location: </label>
            <input
              id="location"
              type="text"
              value={location === null ? "" : location}
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
              value={learningOutcome === null ? "" : learningOutcome}
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
              value={assessment === null ? "" : assessment}
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
              value={introduction === null ? "" : introduction}
              placeholder="Enter introduction for the course"
              required
              onChange={(event) => {
                this.handleValueChange("introduction")(event);
              }}
            />
          </FormItem>
          {!this.state.notNullableError ? (
            <Button type="submit">Submit</Button>
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

export default CourseForm;
