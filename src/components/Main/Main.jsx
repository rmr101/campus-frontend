import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";

class Main extends React.Component {
  constructor(props) {
    super(props);

  }
  renderHeader() {
    let renderArray = this.props.history.map((obj) => (
      <Header
        key={"header_id" + Math.random()}
        title={obj.title}
        onClick={(e) => this.props.handleClickHeader(e, obj.headingID)}
      />
    ));
    return renderArray;
  }

  renderComponent() {
    const history = this.props.history;
    const lastHistory = history[history.length - 1];
    const contentArray = lastHistory.content;
    //update to the newest component
    let renderArray = contentArray.map((obj) => (
      <Content
        key={"content_id" + Math.random()}
        {...obj}
        onClick={this.props.handleAddHeader}
      />
    ));

    return renderArray;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>{this.renderHeader()}</div>
        <div className={styles.content}>{this.renderComponent()}</div>
      </div>
    );
  }
}

export default Main;
