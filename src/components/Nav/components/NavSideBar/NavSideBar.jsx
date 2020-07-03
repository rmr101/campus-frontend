import React from "react";
import styles from "./NavSideBar.module.scss";
import NavItems from "./components/NavItems";
import * as NavItemsRenderMapper from './NavItemsRenderMapper';
import Canvas from './components/Canvas';
import ClickLink from "../../../../store/campus/actions/ClickLink";
import { connect } from "react-redux";
import ChangeCanvasActive from "./../../../../store/campus/actions/ChangeCanvasActive.js";
import ToggleCanvasStatus from "./../../../../store/campus/actions/ToggleCanvasStatus";
import SetCanvasStatus from './../../../../store/campus/actions/SetCanvasStatus';
import ClickHeader from "./../../../../store/campus/actions/ClickHeader";

const NavSideBar = ({
  role,
  canvasOn,
  current,
  toggleCanvas,
  onClick,
  changeActive,
  setCanvasBoolean,
  clickDashboard,
}) => {
  const readConfig = (ConfigArray) => {
    return ConfigArray.map((obj) => {
      if (obj.filler) {
        return <div key={"Filler"} className={styles.filler}></div>;
      } else {
        return (
          <NavItems
            active={current === obj.NavId}
            collapse={canvasOn}
            key={"NavItem_id" + Math.random()}
            icon={obj.icon}
            title={obj.title}
            NavId={obj.NavId}
            onClick={handleClick}
          />
        );
      }
    });
  };

  const renderNavItem = () => {
    switch (role) {
      case "student":
        return readConfig(NavItemsRenderMapper.StudentConfig);
      case "teacher":
        return readConfig(NavItemsRenderMapper.TeacherConfig);
      case "admin":
        return readConfig(NavItemsRenderMapper.AdminConfig);
      default:
        return null;
    }
  };
  const clickToDisplayCanvas = (name) => {
    if (name === current) {
      toggleCanvas();
    } else if (name !== current) {
      //toggle canvas twice
      setCanvasBoolean(false);
      setCanvasBoolean(true);
    }
  };
  const handleClick = (event, name) => {
    switch (name) {
      case "Dashboard":
        changeActive(name);
        setCanvasBoolean(false);
        clickDashboard(event);
        break;
      case "Teachers":
        changeActive(name);
        //id here doesn't matter
        onClick(event, "Teachers", "Teachers");
        setCanvasBoolean(false);
        break;
      case "Students":
        changeActive(name);
        //id here doesn't matter
        onClick(event, "Students", "Students");
        setCanvasBoolean(false);
        break;
      case "UserInfo":
        changeActive(name);
        console.log("I got executed");
        //id here doesn't matter
        onClick(event, "Profile", "UserInfo");
        setCanvasBoolean(false);
        break;
      default:
        event.preventDefault();
        changeActive(name);
        clickToDisplayCanvas(name);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.sideWrapper} + ${
          canvasOn ? null : styles.sideWrapperNotCollapse
        }`}
      >
        {renderNavItem()}
      </div>
      <div className={canvasOn ? styles.canvasActive : styles.canvas}>
        {canvasOn ? <Canvas current={current} /> : null}
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onClick: (event, headingTitle, headingID) => {
    dispatch(ClickLink(event, headingTitle, 0, headingID));
  },
  toggleCanvas: () => dispatch(ToggleCanvasStatus()),
  setCanvasBoolean: (boo) => dispatch(SetCanvasStatus(boo)),
  changeActive: (name) => dispatch(ChangeCanvasActive(name)),
  clickDashboard: (event) => dispatch(ClickHeader(event,1))
});

const mapStateToProps = (state) => ({
  role: state.Authentication.role.toLowerCase(),
  canvasOn: state.navCanvasStatus.canvasOn,
  current: state.navCanvasStatus.current,
});

const NavSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar);
export default NavSideBarContainer;
