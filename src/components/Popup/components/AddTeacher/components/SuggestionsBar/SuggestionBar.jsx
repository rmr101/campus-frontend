import React from "react";
import styles from "./Suggestion.module.scss";

class SuggestionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.nameList.map((r) => (
          <li className={styles.li}key={r.uuid} onClick={()=>{this.props.handleClick(r.name)}}>
            {r.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default SuggestionBar;
