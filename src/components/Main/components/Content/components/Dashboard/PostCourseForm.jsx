import React from 'react';
import Loader from "../../../../../Loader";
import FullWidthLayout from '../../../../../Layout/FullWidthLayout';
import styles from "./PostCourseForm.module.scss";
import postCourse from '../../../../../../apis/postCourse';

const date = new Date();
const year = date.getFullYear();
const semester = date.getMonth()<7? 1 : 2;

class PostCourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      name: "",
      location:"",
      introduction: "",
      assessment:"",
      workLoad: 12.5,
      learningOutcome:"",
      year,
      semester,
      subjectId:0,
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
  async postCourse() {
    const {loading,postSuccessful,...postBody} = this.state;
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
          () => setTimeout(() => this.setState({ postSuccessful: false }), 2000)
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
            <div className={styles.control + " " + styles.horizontalRow}>
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
              <div className={styles.subjectID}>
                {/* TODO can be deleted after implemented  */}
                <label htmlFor="subjectID">SubjectID: </label>
                <input
                  id="subjectID"
                  type="number"
                  required
                  onChange={(event) =>
                    this.handleValueChange("subjectId")(event)
                  }
                />
              </div>
            </div>
            <div className={styles.control + " " + styles.horizontalRow}>
              <div className={styles.titleInput}>
                <label> Year: </label>
                <div className={styles.displayValue}>{year}</div>
              </div>
              <div className={styles.titleInput}>
                <label> Semester: </label>
                <div className={styles.displayValue}>{semester}</div>
              </div>
            </div>
            <div className={styles.control}>
              <label htmlFor="location">Location: </label>
              <input
                id="location"
                type="text"
                placeholder="Enter location for the course"
                maxLength={30}
                required
                onChange={(event) => this.handleValueChange("location")(event)}
              />
            </div>
            <div className={styles.control}>
              <label htmlFor="outcome">Learning Outcome: </label>
              <textarea
                id="outcome"
                className={styles.outcome}
                placeholder="Enter learning outcomes."
                required
                onChange={(event) => {
                  this.handleValueChange("learningOutcome")(event);
                }}
              ></textarea>
            </div>
            <div className={styles.control}>
              <label htmlFor="assessment">Assessments: </label>
              <textarea
                id="assessment"
                className={styles.content}
                placeholder="Enter assessments for the course."
                required
                onChange={(event) => {
                  this.handleValueChange("assessment")(event);
                }}
              ></textarea>
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
            <button className={styles.button} type="submit">
              Post
            </button>
            {this.state.postSuccessful ? (
              <small className={styles.successfulText}>Successful.</small>
            ) : null}
          </form>
        </div>
      </FullWidthLayout>
    );
  }
}

export default PostCourseForm;