import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <NavHeader title={this.props.role + " version" } />
        </div>
        <div className={styles.sideBar}>
          <NavSidebar {...this.props} />
        </div>
      </div>
    );
  }


}

export default Nav;
