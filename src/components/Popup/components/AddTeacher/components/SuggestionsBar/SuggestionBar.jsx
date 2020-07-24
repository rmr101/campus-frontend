import React from "react";

class SuggestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.nameList.map((r) => (
          <li key={r.uuid} onClick={()=>{this.props.handleClick(r.name,r.uuid)}}>
            {r.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default SuggestionBar;
