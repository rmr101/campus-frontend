import React from 'react';
import Loader from "../../../../../Loader";
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import styles from "./CourseForm.module.scss";
import postCourse from '../../../../../../apis/postCourse';
import putCourse from "../../../../../../apis/putCourse";
import LoaderContainer from "../../../../../Layout/LoaderContainer";
import AddTeacherBtn from '../../../../../Button';
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
const semester = date.getMonth()<7? 1 : 2;

class CourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      notNullableError: "",
      name: "",
      location: "",
      introduction: "",
      assessment: "",
      workLoad: 12.5,
      learningOutcome: "",
      // TODO: teacherUuid:"",
      year,
      semester,
      subjectId: this.props.subjectId,
      courseId: this.props.courseId,
    };
    this.handleTeacherUuidChange = this.handleTeacherUuidChange.bind(this);
  }
  handleTeacherUuidChange(uuid){
    // TODO:this.setState({teacherUuid:uuid})                             
  }
  checkNull() {
    const {
      postSuccessful,
      loading,
      notNullableError,
      workLoad,
      year,
      semester,
      courseId,
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
  //TODO: new function to handle put, api may need to change later
  sendData(postBody) {
    const {subjectId,courseId} = this.state;
    switch (this.props.apiMethod) {
      case "POST":
        return postCourse({...postBody, subjectId});
      case "PUT":
        return putCourse({ ...postBody, courseId });
      default:
        return putCourse({ ...postBody, courseId });
    }
  }
  async postCourse() {
    const {
      loading,
      postSuccessful,
      notNullableError,
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

          <FormTitle>{this.props.title}</FormTitle>
          <HorizontalRow>
            <FormItem>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                value={this.props.name}
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
              >
                <option value={12.5}>12.5</option>
                <option value={25}>25</option>
                <option value={37.5}>37.5</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </FormItem>
            <FormItem>
              {/* TODO: add this button */}
              <label htmlFor="AddTeacherBtn">Assign Teacher:</label>
              <AddTeacherBtn
                id="AddTeacherBtn"
                type={"ADD_TEACHER_TO_COURSE"}
                handleTeacherUuidChange={this.handleTeacherUuidChange}
              />
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
              placeholder="Enter introduction for the course"
              required
              onChange={(event) => {
                this.handleValueChange("introduction")(event);
              }}
            />
          </FormItem>
          {!this.state.notNullableError ? (
            <Button type="submit">Add New Course</Button>
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