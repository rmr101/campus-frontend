import React from 'react';
import Loader from "../../../../../Loader";
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import styles from "./PostCourseForm.module.scss";
// {
//   "assessment": "string",
//   "learningOutcome": "string",
//   "location": "string",
//  
//   "semester": "string",
//   "subjectId": 0,
//   "workLoad": "string",
//   "year": "string"
// }

const date = new Date();
const year = date.getFullYear();
const semester = date.getMonth()<7? "First" : "Second";

class PostCourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      name: "",
      introduction: "",
      workLoad: 12.5,
      year,
      semester,
    };
  }
  handleValueChange(name) {
    return (event) => {
      const { value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  // async publishAssignment() {
  //   const title = this.state.title;
  //   const AC = this.state.acceptanceCriteria;
  //   const content = this.state.content;
  //   const courseID = this.state.courseAssignmentId;
  //   const dueDate = this.state.dueDate;
  //   this.setState({
  //     publishLoading: true,
  //   });
  //   await teacherPublishAssignment(title, AC, content, dueDate, courseID)
  //     .then(() => {
  //       this.getAssignmentList();
  //       this.setState(
  //         {
  //           publishLoading: false,
  //           publishSuccessful: true,
  //         },
  //         () =>
  //           setTimeout(() => this.setState({ publishSuccessful: false }), 2000)
  //       );
  //     })
  //     .catch(console.log);
  // }
  // onSubmit() {
  //   this.publishAssignment();
  // }
  render() {
    return (
      <FullWidthLayout>
        <div className={styles.postWrapper}>
          <form
            className={`${styles.form} ${
              this.state.postSuccessful && styles.successful
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <div className={styles.title}>Post New Course</div>
            {this.state.loading ? (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            ) : null}
            <div className={styles.control + " " + styles.firstRow}>
              <div className={styles.titleInput}>
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name for the course"
                  maxLength={30}
                  required
                  onChange={(event) => this.handleValueChange("name")(event)}
                />
              </div>
              <div>
                <label htmlFor="workLoad">Course points:</label>
                <select
                  onChange={(event) =>
                    this.handleValueChange("workLoad")(event)
                  }
                  required
                  id="workLoad"
                  className={styles.workLoad}
                >
                  <option value={12.5}>12.5</option>
                  <option value={25}>25</option>
                  <option value={37.5}>37.5</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>
            <div className={styles.control + " " + styles.firstRow}>
              <div className={styles.titleInput}>
                <label> Year: </label>
                <div>{year}</div>
              </div>
              <div className={styles.titleInput}>
                <label> Semester: </label>
                <div>{semester}</div>
              </div>
            </div>
            <div className={styles.control}>
              <label htmlFor="Intro">Introduction: </label>
              <textarea
                id="Intro"
                className={styles.intro}
                placeholder="Enter introduction for the course."
                required
                onChange={(event) => {
                  this.handleValueChange("introduction")(event);
                }}
              ></textarea>
            </div>
            <div className={styles.control}>
              <label htmlFor="outcome">learningOutcome: </label>
              <textarea
                id="outcome"
                className={styles.outcome}
                placeholder="Enter learning outcomes."
                required
                onChange={(event) => {
                  this.handleValueChange("outcome")(event);
                }}
              ></textarea>
            </div>
            <div className={styles.control}>
              <label htmlFor="content">Content: </label>
              <textarea
                id="content"
                className={styles.content}
                placeholder="Enter assignment content"
                required
                onChange={(event) => {
                  this.handleValueChange("content")(event);
                }}
              ></textarea>
            </div>
            <button className={styles.button} type="submit">
              Publish
            </button>
            {this.state.publishSuccessful ? (
              <small className={styles.successfulText}>
                {" "}
                Assignment published successfully.{" "}
              </small>
            ) : null}
          </form>
        </div>
      </FullWidthLayout>
    );
  }
}

export default PostCourseForm;