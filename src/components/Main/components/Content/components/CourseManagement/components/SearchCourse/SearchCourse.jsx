import React from "react";
import {
  FormLayout,
  FormItem,
  SearchRow,
  SearchBtn,
  SmallText,
} from "../../../../../../../Layout/FormLayout/FormLayout";
class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearchByTemp = (e) => {
    this.props.onSearchByChange(e.target.value);
  };

  handleSearchTemp = (e) => {
    this.props.onSearchChange(e.target.value);
  };


  render() {
    return (
      <FormLayout onSubmit={e=>{e.preventDefault();
      this.props.onClick(e);}}>
        <SearchRow>
          <FormItem>
            <select
              value={this.props.searchBy}
              onChange={this.handleSearchByTemp}
            >
              <option value="Course Name">Course Name</option>
              <option value="Course ID">Course ID</option>
            </select>
          </FormItem>
          <FormItem>
            <input
              placeholder="Enter ID or Name..."
              type="text"
              value={this.props.search}
              onChange={this.handleSearchTemp}
            />
          </FormItem>
          <SmallText className={"error"} searchBar>
            {this.props.errors}
          </SmallText>
          <SearchBtn type="submit" />
        </SearchRow>
      </FormLayout>
    );
  }
}

export default SearchCourse;
