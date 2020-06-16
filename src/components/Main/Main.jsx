import React from "react";
import styles from "./Main.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";


class Main extends React.Component {
  constructor(props) {
    super(props);

    //之后再Lifting
    this.state = {
      //这是参考react的逻辑的
      history: [
        {
          headingID: 1,
          title: "Dashboard",
          content: [
            { type: "Context", title: "Information" },
            { type: "ListsGroup", title: "Student", listType: "student" },
            { type: "ListsGroup", title: "Teacher", listType: "teacher" },
            { type: "ListsGroup", title: "Course", listType: "course" },
          ],
        },
      ],
    };
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.handleAddHeader = this.handleAddHeader.bind(this);
  }

  handleClickHeader(event,headingID) {
    event.preventDefault();
    const history = this.state.history;
    this.setState(
      { history: history.slice(0,headingID)}
    );
  }
  handleAddHeader(event, obj) {
    event.preventDefault();
    let history = this.state.history;
    let id = history.length + 1;
    let newHistory = [...history,{
      headingID: id,
      ...obj
    }];
    console.log(newHistory);
    this.setState(
      { history: newHistory}
      );
  }
  renderHeader() {
    let renderArray = this.state.history.map((obj) => (
      <Header
        key={"header_id" + obj.headingID}
        title={obj.title}
        onClick={(e) => this.handleClickHeader(e, obj.headingID)}
      />
    ));
    return renderArray;
  }

  renderComponent() {
    const history = this.state.history;

    //update to the newest component
    let renderArray = history[history.length - 1].content.map((obj) => (
      <Content
        key={ "content_id" + Math.random()}
        {...obj}
        onClick={this.handleAddHeader}
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
