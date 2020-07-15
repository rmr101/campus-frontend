import React from "react";
import getCourseQuery from "./../../../../../../apis/getCourseQuery";
import Button from "../../../../../Button";
import SearchCourse from "./components/SearchCourse";
import styles from "./CourseManagement.module.scss";
import RenderContentLink from "./../RenderContentLink";
import NoContent from "../NoContent";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import { connect } from "react-redux";
import {
  IndexItem,
  HeaderRow,
  TableLayout,
  TableItem,
} from "../../../../../Layout/TableLayout/TableLayout";

class CourseManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchBy: "Course Name",
      courseList: null,
      errors: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async getUserName(searchBy) {
    const validCourseIdRegex = RegExp(/^([0-9]*)$/);
    const validCourseNameRegex = RegExp(/^([a-zA-Z]*)$/);
    switch (searchBy) {
      case "Course ID":
        if (validCourseIdRegex.test(this.state.search) === true) {
          const courseList = await getCourseQuery(
            "courseId",
            this.state.search
          );
          console.log(courseList);
          this.setState({
            courseList: courseList,
          });
        } else {
          this.setState({
            errors: "Please check the Course ID!",
          });
        }
        break;
      case "Course Name":
        if (validCourseNameRegex.test(this.state.search) === true) {
          const courseList = await getCourseQuery(
            "courseName",
            this.state.search
          );
          console.log(courseList);
          this.setState({
            courseList: courseList,
          });
        } else {
          this.setState({
            errors: "Please check the Course Name!",
          });
        }
        break;
        default:
          break;
    }
  }

  componentDidWillMount() {
    if (this.state.searchBy !== this.props.searchBy) {
      this.setState({ errors: "" });
    }
  }
  componentDidMount() {
    this.getUserName();
  }

  async onSubmit(e) {
    e.preventDefault();
    if (this.state.search === "") {
      this.setState({
        errors: "Please Input Something!",
      });
    } else if (this.state.errors === "") {
      await (console.log(this.state.searchBy),
      this.getUserName(this.state.searchBy));
    } else if (this.state.searchBy !== this.props.searchBy) {
      this.setState({ errors: "" });
      await (console.log(this.state.searchBy),
      this.getUserName(this.state.searchBy));
    }
  }

  handleSearchByTemp = (searchBy) => {
    this.setState({
      searchBy: searchBy,
    });
    console.log(this.state.searchBy);
  };

  handleSearchTemp = (search) => {
    let errors = this.state.errors;
    const validInputRegex = RegExp(/^[a-zA-Z0-9]+$/);
    errors = validInputRegex.test(search) ? "" : "Invalid Input!";
    this.setState({
      errors: errors,
      search: search,
    });
    console.log(this.state.search, this.state.errors);
  };

  renderCourseList() {
    let array = this.state.courseList;
    console.log(array);
    return array.map((obj, index) => {
      let { id, name } = obj;
      let courseId=id;
      console.log(obj);
      let RenderObj = {
        index: index,
        name: name,
        courseId,
      };
      return (
        <RenderContentLink
          key={"CourseManagement" + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Course"}
        />
      );
    });
  }

  renderContent() {
    if (this.state.courseList === null) {
      return <NoContent text={"There is no such course!"} />;
    } else {
      return (
        <TableLayout>
          <HeaderRow>
            <IndexItem>No:</IndexItem>
            <TableItem>Course Name:</TableItem>
            <TableItem>Course ID:</TableItem>
          </HeaderRow>
          {this.renderCourseList()}
        </TableLayout>
      );
    }
  }

  render() {
    return (
      <FullWidthLayout>
        <div className={styles.header}>
          <SearchCourse
            search={this.state.search}
            onSearchChange={this.handleSearchTemp}
            searchBy={this.state.searchBy}
            onSearchByChange={this.handleSearchByTemp}
            onClick={this.onSubmit}
            errors={this.state.errors}
          />
          <div className={styles.createBtn}>
            <Button type={"CREATE"} />
          </div>
        </div>
        <div className={styles.wrapper}>{this.renderContent()}</div>
      </FullWidthLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  header: state.headerHistory.title,
});
const CourseManagementContainer = connect(mapStateToProps)(CourseManagement);
export default CourseManagementContainer;
