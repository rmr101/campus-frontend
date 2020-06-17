import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  
  return (
    <Menu>
    <a className={styles.Sidebar} href="/Dashboard">
    Dashboard
    </a>

    <a className={styles.Sidebar} href="/Enrollment">
      Enrollment
    </a>

    <a className={styles.Sidebar} href="/Assignment">
      Assignment
    </a>

    <a className="menu-item" href="/Payment">
      Payment
    </a>

    <a className="menu-item" href="/Course market">
      Course market
    </a>

    <a className="menu-item" href="/User info">
      User info
    </a>

    <a className="menu-item" href="/Help">
      Help
    </a>

    <a className="menu-item" href="/Settings">
      Settings
    </a>
  </Menu>
  );
}

export default Sidebar;