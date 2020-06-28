import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";
import NavAvatar from './components/NavAvatar';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.role);
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <NavHeader />
        </div>
        <NavAvatar />
        <div className={styles.sideBar}>
          <NavSidebar {...this.props} />
        </div>
        <div className={styles.footer}>
          <h3> {this.props.role + " version"}</h3>
        </div>
      </div>
    );
  }


}

export default Nav;
