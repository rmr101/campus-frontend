import React from "react";
import SearchTeacher from "./components/SearchTeacher";
import SuggestionBar from "./components/SuggestionsBar";
import getUserQuery from "../../../../apis/getUserQuery";
import { FormItem, InFormLayout } from "../../../Layout/FormLayout/FormLayout";

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchBy: "Teacher Name",
      nameList: [],
      suggestion: "",
    };
  }

  handleSearchByTemp = (searchBy) => {
    this.setState({
      searchBy: searchBy,
    });
    console.log(this.state.searchBy);
  };

  handleClick = (suggestion) => {
    this.setState({
      search: suggestion,
    });
    console.log(this.state.search);
  };

  handleSearchTemp = (search) => {
    let errors = this.state.errors;
    const validInputRegex = RegExp(/^[a-zA-Z0-9]+$/);
    errors = validInputRegex.test(search) ? "" : "Invalid Input!";
    this.setState(
      {
        errors: errors,
        search: search,
      },
      () => {
        if (this.state.search && this.state.search.length > 1) {
          if (this.state.search.length % 2 === 0) {
            this.getTeacherQuery(this.state.searchBy);
          }
        }
      }
    );
    console.log(this.state.search);
  };

  async getTeacherQuery(searchBy) {
    const validTeacherIdRegex = RegExp(/^t([0-9]*)$/);
    const validTeacherNameRegex = RegExp(/^([a-zA-Z]*)$/);
    switch (searchBy) {
      case "Teacher ID":
        if (validTeacherIdRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("teacherId", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else {
          this.setState({
            errors: "Please check the Teacher ID!",
          });
        }
        break;
      case "Teacher Name":
        if (validTeacherNameRegex.test(this.state.search) === true) {
          const nameList = await getUserQuery("teacherName", this.state.search);
          console.log(nameList);
          this.setState({
            nameList: nameList,
          });
        } else {
          this.setState({
            errors: "Please check the Teacher Name!",
          });
        }
        break;
      default:
        break;
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    console.log(this.state.search);
    if (this.state.search === "") {
      this.setState({
        errors: "Please Input Something!",
      });
    } else if (this.state.errors === "") {
      await (console.log(this.state.searchBy),
      this.getTeacherQuery(this.state.searchBy));
    } else if (this.state.searchBy !== this.props.searchBy) {
      this.setState({ errors: "" });
      await (console.log(this.state.searchBy),
      this.getTeacherQuery(this.state.searchBy));
    }
  }

  render() {
    return (
      <InFormLayout>
        <SearchTeacher
          title={"Find Teacher"}
          search={this.state.search}
          onSearchChange={this.handleSearchTemp}
          searchBy={this.state.searchBy}
          onSearchByChange={this.handleSearchByTemp}
          onClick={this.onSubmit.bind(this)}
          errors={this.state.errors}
          nameList={this.state.nameList}
        />
        <FormItem>
          {this.state.nameList === null ? null : (
            <SuggestionBar
              nameList={this.state.nameList}
              handleClick={this.handleClick}
            />
          )}
        </FormItem>
      </InFormLayout>
    );
  }
}
export default AddTeacher;
