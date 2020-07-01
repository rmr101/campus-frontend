import React from "react";
import NavHeader from "./components/NavHeader";
import NavSidebar from "./components/NavSideBar";
import styles from "./Nav.module.scss";
import NavAvatar from './components/NavAvatar';

const NavFooter = ({role}) => <h3> {role + " version"}</h3>;
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <NavFooter role={this.props.role}/>
        </div>
      </div>
    );
  }


}

export default Nav;
