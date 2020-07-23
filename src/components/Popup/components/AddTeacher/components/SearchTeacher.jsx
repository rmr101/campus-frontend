import React from "react";
import SuggestionBar from "./components/SuggestionsBar";
import {
  FormLayout,
  HorizontalRow,
  FormItem,
  SearchRow,
  SearchBtn,
  SmallText,
  FormTitle,
} from "../../../../Layout/FormLayout/FormLayout";

class SearchTeacher extends React.Component {
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
      <FormLayout>
        {this.props.title ? <FormTitle>{this.props.title}</FormTitle> : null}
        <SearchRow>
          <FormItem>
            <select
              value={this.props.searchBy}
              onChange={this.handleSearchByTemp}
            >
              <option value="Teacher Name">Teacher Name</option>
              <option value="Teacher ID">Teacher ID</option>
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
          <SearchBtn type="submit" onClick={this.props.onClick} />
        </SearchRow>
        <HorizontalRow>
          <FormItem>
            {this.props.nameList===null?null:<SuggestionBar nameList={this.props.nameList}/>}
          </FormItem>
        </HorizontalRow>
      </FormLayout>
    );
  }
}

export default SearchTeacher;
