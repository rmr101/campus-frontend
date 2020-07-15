import React from "react";
import styles from "./TeacherCourseAssignment.module.scss";
import RenderContentLink from "../RenderContentLink";
import getAssignmentListByCourse from "../../../../../../apis/getAssignmentListByCourse";
import teacherPublishAssignment from "../../../../../../apis/teacherPublishAssignment";
import Loading from "../Loading";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import Loader from "../../../../../Loader";
import { connect } from "react-redux";
import LoaderContainer from "../../../../../Layout/LoaderContainer";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";
import {
  FormLayout,
  FormTitle,
  FormItem,
  HorizontalRow,
  Button,
  DummyButtonBlock,
  SmallText,
} from "../../../../../Layout/FormLayout/FormLayout";




class TeacherCourseAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseAssignmentId: 0,
      assignmentList: null,
      notNullableError: "",
      loading: true,
      acceptanceCriteria: "",
      content: "",
      title: "",
      dueDate: "",
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
    return array.map((obj, index) => {
      let { title, id, dueDate } = obj;
      let RenderObj = {
        index: index,
        name: title,
        id: id,
        secondID: this.props.id,
        dueDate: dueDate + " 11:59 pm ",
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
  checkNull() {
    const {
      courseAssignmentId,
      assignmentList,
      notNullableError,
      loading,
      dueDate,
      publishLoading,
      publishSuccessful,
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
  async publishAssignment() {
    const title = this.state.title;
    const AC = this.state.acceptanceCriteria;
    const content = this.state.content;
    const courseID = this.state.courseAssignmentId;
    const dueDate = this.state.dueDate;
    this.setState({
      publishLoading: true,
    });
    await teacherPublishAssignment(title, AC, content, dueDate, courseID)
      .then(() => {
        this.getAssignmentList();
        this.setState(
          {
            publishLoading: false,
            publishSuccessful: true,
          },
          () =>
            setTimeout(() => this.setState({ publishSuccessful: false }), 2000)
        );
      })
      .catch(console.log);
  }
  onSubmit() {
    this.publishAssignment();
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          <TableLayout>
            <HeaderRow>
              <IndexItem>No:</IndexItem>
              <TableItem>Assignment Name:</TableItem>
              <TableItem>Assignment Due:</TableItem>
            </HeaderRow>
            {this.state.loading ? <Loading /> : this.renderAssignmentList()}
          </TableLayout>
        </FullWidthLayout>
        <FullWidthLayout>
          <FormLayout
            className={this.state.postSuccessful ? "successful" : null}
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <FormTitle>Publish New Assignment</FormTitle>
            {this.state.publishLoading ? (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            ) : null}
            <HorizontalRow>
              <FormItem>
                <label htmlFor="title">Title: </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title for the assignment"
                  maxLength={30}
                  required
                  onChange={(event) => this.handleValueChange("title")(event)}
                />
              </FormItem>
              <FormItem>
                <label htmlFor="dueDate">Due Date (11:59 pm):</label>
                <input
                  onChange={(event) => this.handleValueChange("dueDate")(event)}
                  required
                  type="date"
                  id="dueDate"
                />
              </FormItem>
            </HorizontalRow>
            <FormItem>
              <label htmlFor="AC">Criteria: </label>
              <textarea
                id="AC"
                className={styles.acceptance}
                placeholder="Enter acceptance criteria"
                required
                onChange={(event) => {
                  this.handleValueChange("acceptanceCriteria")(event);
                }}
              />
            </FormItem>
            <FormItem>
              <label htmlFor="content">Content: </label>
              <textarea
                id="content"
                className={styles.content}
                placeholder="Enter assignment content"
                required
                onChange={(event) => {
                  this.handleValueChange("content")(event);
                }}
              />
            </FormItem>
            {!this.state.notNullableError ? (
              <Button type="submit">Add New Course</Button>
            ) : (
              <DummyButtonBlock>Unable to Click</DummyButtonBlock>
            )}
            {this.state.notNullableError ? (
              <SmallText className={"error"}>
                {this.state.notNullableError}
              </SmallText>
            ) : null}
            {this.state.publishSuccessful ? (
              <SmallText>Assignment published successfully.</SmallText>
            ) : null}
          </FormLayout>
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  header: state.headerHistory.title,
});
const TeacherCourseAssignmentContainer = connect(mapStateToProps)(
  TeacherCourseAssignment
);
export default TeacherCourseAssignmentContainer;
