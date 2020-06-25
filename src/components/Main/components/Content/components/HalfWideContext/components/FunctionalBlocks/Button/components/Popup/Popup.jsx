import React from "react";
import styles from "./Popup.module.scss";
import Update from "./Update";
import Create from "./Create";
import Delete from "./Delete";

class Popup extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }
  renderPopupWindow(type){
    console.log(type);
    switch (type) {
      case "UPDATE":
        return <Update onClick={this.props.toggle} />;
      case "CREATE":
        return <Create onClick={this.props.toggle} />;
      case "DELETE":
        return <Delete onClick={this.props.toggle} />;
      default:
        return null;
    }
  }
  render() {

    return (
      <div className={styles.mask}>
        <div className={styles.wrapper}>
            <span className={styles.close} onClick={this.props.toggle}>
              &times;
            </span>
            {this.renderPopupWindow(this.props.type)}
        </div>
      </div>
    );
  }
}

export default Popup;