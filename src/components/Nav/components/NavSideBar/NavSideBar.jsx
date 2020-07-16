import React from "react";
import styles from "./NavSideBar.module.scss";
import NavItems from "./components/NavItems";
import * as NavItemsRenderMapper from "./NavItemsRenderMapper";
import Canvas from "./components/Canvas";
import AddHeader from "../../../../store/campus/actions/AddHeader";
import { connect } from "react-redux";

class NavSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasOn: false,
      current: "Dashboard",
    };
    console.log();
    this.handleClick = this.handleClick.bind(this);
  }
  readConfig(ConfigArray) {
    return ConfigArray.map((obj) => {
      if (obj.filler) {
        return <div key={"Filler"} className={styles.filler}></div>;
      } else {
        return (
          <NavItems
            active={this.state.current === obj.NavId}
            collapse={this.state.canvasOn}
            key={"NavItem_id" + Math.random()}
            icon={obj.icon}
            title={obj.title}
            NavId={obj.NavId}
            onClick={this.handleClick}
          />
        );
      }
    });
  }

  componentDidMount() {
    this.changeActive("Dashboard");
  }
  renderNavItem() {
    switch (this.props.role) {
      case "student":
        return this.readConfig(NavItemsRenderMapper.StudentConfig);
      case "teacher":
        return this.readConfig(NavItemsRenderMapper.TeacherConfig);
      case "admin":
        return this.readConfig(NavItemsRenderMapper.AdminConfig);
      default:
        return null;
    }
  }
  changeActive(name) {
    this.setState({
      current: name,
    });
  }
  setCanvasStatus(boolean) {
    this.setState({ canvasOn: boolean });
  }
  toggleCanvas() {
    this.setState({
      canvasOn: !this.state.canvasOn,
    });
  }
  clickToDisplayCanvas = (name) => {
    if (name === this.state.current) {
      this.toggleCanvas();
    } else if (name !== this.state.current) {
      //toggle canvas twice
      this.setCanvasStatus(false);
      this.setCanvasStatus(true);
    }
  };
  handleClick(name) {
    switch (name) {
      case "Dashboard":
        this.changeActive(name);
        this.setCanvasStatus(false);
        this.props.addHeader("Dashboard", "Dashboard");
        break;
      case "Users":
        this.changeActive(name);
        //TODO: UserManagement 是ID 还是 Users 是？
        this.props.addHeader("User management", "Users");
        this.setCanvasStatus(false);
        break;
      case "CourseManagement":
        this.changeActive(name);
        //TODO: UserManagement 是ID 还是 Users 是？
        this.props.addHeader("Course management", "CourseManagement");
        this.setCanvasStatus(false);
        break;
      case "Assignment":
        this.changeActive(name);
        this.props.addHeader("Assignment", "StudentAssignment");
        this.setCanvasStatus(false);
        break;
      case "UserInfo":
        this.changeActive(name);
        this.props.addHeader("Profile", "UserInfo");
        this.setCanvasStatus(false);
        break;
      case "Help":
        this.changeActive(name);
        this.props.addHeader("Help", "Help");
        this.setCanvasStatus(false);
        break;
      case "Setting":
        this.changeActive(name);
        this.props.addHeader("Setting", "Setting");
        this.setCanvasStatus(false);
        break;
      case "Payment":
        this.changeActive(name);
        this.props.addHeader("Payment", "Payment");
        this.setCanvasStatus(false);
        break;
      case "Classroom":
        this.changeActive(name);
        this.props.addHeader("Classroom", "Classroom");
        this.setCanvasStatus(false);
        break;
      default:
        this.changeActive(name);
        this.clickToDisplayCanvas(name);
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div
          className={`${styles.sideWrapper} + ${
            this.state.canvasOn ? null : styles.sideWrapperNotCollapse
          }`}
        >
          {this.renderNavItem()}
        </div>
        <div
          className={this.state.canvasOn ? styles.canvasActive : styles.canvas}
        >
          {this.state.canvasOn ? <Canvas current={this.state.current} /> : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addHeader: (headingTitle, headingID) =>
    dispatch(AddHeader(headingTitle, headingID)),
});

const mapStateToProps = (state) => ({
  role: state.Authentication.role.toLowerCase(),
});

const NavSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar);
export default NavSideBarContainer;
