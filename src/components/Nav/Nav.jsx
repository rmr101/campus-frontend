import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";


class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          navHeadingID: 1, 
          title: "Postion for Logo",
          navSidebar: [
            { type: "ListsGroup",},
            { type: "ListsGroup",},
            { type: "ListsGroup",},
            { type: "ListsGroup",},
            { type: "ListsGroup",},
            { type: "ListsGroup",},
            { type: "ListsGroup",},
          ]
        },
      ],
    };
    this.handleClickNavHeader = this.handleClickNavHeader.bind(this);
    this.handleAddNavHeader = this.handleAddNavHeader.bind(this);
  }
  handleClickNavHeader(event,navHeadingID) {
    event.preventDefault();
    const history = this.state.history;
    this.setState(
      { history: history.slice(0,navHeadingID)}
    );
  }
  handleAddNavHeader(event, obj) {
    event.preventDefault();
    let history = this.state.history;
    let id = history.length + 1;
    let newHistory = [...history,{
      navHeadingID: id,
      ...obj
    }];
    console.log(newHistory);
    this.setState(
      { history: newHistory}
      );
  }
  renderNavHeader() {
    let renderArray = this.state.history.map((obj) => (
      <NavHeader
        key={"navheader_id" + obj.navHeadingID}
        title={obj.title}
        onClick={(e) => this.handleClickNavHeader(e, obj.navHeadingID)}
      />
    ));
    return renderArray;
  }

 

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>{this.renderNavHeader()}</div>
        <div className={styles.sideBar}>
          <NavSidebar/>
          </div>
      </div>
    );
  }


}

export default Nav;