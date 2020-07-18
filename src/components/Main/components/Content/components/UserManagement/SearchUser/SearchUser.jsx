import React from "react";
import {
  FormLayout,
  FormItem,
  SearchRow,
  SearchBtn,
  SmallText,
} from "../../../../../../Layout/FormLayout/FormLayout";
class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRoleTemp = (e) => {
    this.props.onRoleChange(e.target.value);
  };

  handleSearchTemp = (e) => {
    this.props.onSearchChange(e.target.value);
  };


  render() {
    return (
      <FormLayout
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onClick(e);
        }}
      >
        <SearchRow>
          <FormItem>
            <select value={this.props.role} onChange={this.handleRoleTemp}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
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

export default SearchUser;
