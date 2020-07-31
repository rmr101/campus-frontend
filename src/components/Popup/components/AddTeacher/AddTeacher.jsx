import React from "react";
import SearchTeacher from "./components/SearchTeacher";
import SuggestionBar from "./components/SuggestionsBar";
import getUserQuery from "../../../../apis/getUserQuery";
import debounce from "../../../../utils/Algorithm/debounce";
import { FormItem, InFormLayout } from "../../../Layout/FormLayout/FormLayout";

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchBy: "Teacher Name",
      nameList: [],
      suggestion: "",
      errors: "",
      uuid: null,
    };
    this.onClick = this.onClick.bind(this);
    this.handleSearchTemp = this.handleSearchTemp.bind(this);
    this.handleSearchByTemp = this.handleSearchByTemp.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deBounce = debounce(this.deBounce.bind(this), 200);
  }

  handleSearchByTemp(searchBy) {
    this.setState({
      searchBy: searchBy,
    });
    console.log(this.state.searchBy);
  }

  handleClick(suggestion, uuid) {
    this.setState(
      {
        search: suggestion,
        uuid,
        errors: "",
      },
      () => console.log(this.state.search, this.state.uuid)
    );
  }

  handleSearchTemp(search) {
    let errors = this.state.errors;
    const validInputRegex = RegExp(/^[a-zA-Z0-9]+$/);
    errors = validInputRegex.test(search) ? "" : "Invalid Input!";
    this.setState({
      errors: errors,
      search: search,
    });
    this.deBounce(search);
    console.log(this.state.search);
  }

  deBounce(search) {
    if (search.length > 1) {
      this.getTeacherQuery(this.state.searchBy, search);
    }
  }

  async getTeacherQuery(searchBy, search) {
    const validTeacherIdRegex = RegExp(/^t([0-9]*)$/);
    const validTeacherNameRegex = RegExp(/^([a-zA-Z]*)$/);
    switch (searchBy) {
      case "Teacher ID":
        if (validTeacherIdRegex.test(search) === true) {
          const nameList = await getUserQuery("teacherId", search);
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
        if (validTeacherNameRegex.test(search) === true) {
          const nameList = await getUserQuery("teacherName", search);
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

  onClick() {
    const { handleAddTeacher, onClick } = this.props;
    const { uuid, search } = this.state;
    handleAddTeacher(search, uuid);

    //this close the popup.
    onClick();
  }

  render() {
    const { search, searchBy, errors, nameList } = this.state;

    return (
      <InFormLayout>
        <SearchTeacher
          title={"Find Teacher"}
          search={search}
          onSearchChange={this.handleSearchTemp}
          searchBy={searchBy}
          onSearchByChange={this.handleSearchByTemp}
          onClick={this.onClick}
          errors={errors}
          nameList={nameList}
        />
        <FormItem>
          {this.state.nameList === null ? null : (
            <SuggestionBar nameList={nameList} handleClick={this.handleClick} />
          )}
        </FormItem>
      </InFormLayout>
    );
  }
}
export default AddTeacher;
