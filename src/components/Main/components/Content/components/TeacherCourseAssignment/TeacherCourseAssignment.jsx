import React from "react";
import styles from "./TeacherCourseAssignment.module.scss";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import teacherPublishAssignment from "../../../../../../apis/teacherPublishAssignment";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import Loader from "../../../../../Loader";
import { connect } from "react-redux";


//TODO: Can a
class TeacherCourseAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseAssignmentId: 0,
      assignmentList: null,
      loading: true,
      acceptanceCriteria: "",
      content: "",
      title: "",
      publishLoading: false,
      publishSuccessful: false,
    };
  }

  async getAssignmentList() {
    this.setState({
      loading: true,
    });
    const { assignmentList } = await getAssignmentListByCourse(this.props.id);
    this.setState({
      assignmentList: assignmentList,
      loading: false,
    });
  }
  componentDidUpdate() {
    if (this.state.courseAssignmentId !== this.props.id) {
      this.setState({ courseAssignmentId: this.props.id }, () =>
        this.getAssignmentList()
      );
    }
  }
  componentDidMount() {
    this.getAssignmentList();
  }

  renderAssignmentList() {
    let array = this.state.assignmentList;
    return array.map((obj) => {
      let { name, id, dueDate } = obj;
      let RenderObj = {
        name: name,
        id: id,
        dueDate,
      };
      return (
        <RenderContentLink
          key={"TeacherCourseAssignment" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Assignment"}
        />
      );
    });
  }
  handleValueChange(name) {
    return (event) => {
      const { value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  }
  async publishAssignment(){
    const title = this.state.title;
    const AC = this.state.acceptanceCriteria;
    const content = this.state.content;
    const courseID = this.state.courseAssignmentId;
    this.setState({
      publishLoading: true,
    });
    await teacherPublishAssignment(title, AC, content, courseID)
    .then(()=> {
        this.getAssignmentList();
        this.setState(
          {
            publishLoading: false,
            publishSuccessful: true,
          },
          () => setTimeout(this.setState({ publishSuccessful: false }), 1000)
        );}).catch(console.log);
  }
  onSubmit() {
    this.publishAssignment();
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <div className={styles.heading}>Assignment Name:</div>
              <div className={styles.heading}>Assignment ID:</div>
              <div className={styles.heading}>Assignment Due:</div>
            </div>
            {this.state.loading ? <Loading /> : this.renderAssignmentList()}
          </div>
        </FullWidthLayout>
        <FullWidthLayout>
          <div className={styles.AssignmentPostWrapper}>
            <form
              className={`${styles.form} ${this.state.publishSuccessful?styles.successful:null}`}
              onSubmit={(e) => {
                e.preventDefault();
                this.onSubmit();
              }}
            >
              <div className={styles.title}>Publish New Assignment</div>
              {this.state.publishLoading ? (
                <div className={styles.loaderContainer}>
                  <Loader />
                </div>
              ) : null}
              <div className={styles.control +" "+ styles.dueDate}>
                <div>
                <label>Title: </label>
                <input
                  className={styles.oldPass}
                  type="text"
                  placeholder="Enter title for the assignment"
                  autoComplete="on"
                  maxLength={30}
                  required
                  onChange={(event) => this.handleValueChange("title")(event)}
                />
                </div>
                <div>
                  <label for="start">Due Date:</label>
                    <input type="date" id="start" name="trip-start"
                  value="2018-07-22"
                  min="2018-01-01" max="2018-12-31"/>
                </div>
              </div>
              <div className={styles.control}>
                <label>Criteria: </label>
                <textarea
                  className={styles.acceptance}
                  placeholder="Enter acceptance criteria"
                  required
                  onChange={(event) => {
                    this.handleValueChange("acceptanceCriteria")(event);
                  }}
                ></textarea>
              </div>
              <div className={styles.control}>
                <label>Content: </label>
                <textarea
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
            </form>
          </div>
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
});
const TeacherCourseAssignmentContainer = connect(mapStateToProps)(
  TeacherCourseAssignment
);
export default TeacherCourseAssignmentContainer;
