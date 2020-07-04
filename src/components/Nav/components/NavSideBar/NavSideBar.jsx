import React from "react";
import styles from "./NavSideBar.module.scss";
import NavItems from "./components/NavItems";
import * as NavItemsRenderMapper from './NavItemsRenderMapper';
import Canvas from './components/Canvas';
import AddHeader from "../../../../store/campus/actions/AddHeader";
import { connect } from "react-redux";

class NavSideBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      canvasOn:false,
      current:"Dashboard",
    }
    this.handleClick=this.handleClick.bind(this);
  }
  readConfig(ConfigArray){
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
  };

  renderNavItem(){
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
  };
  changeActive(name){
    this.setState({
      current:name,
    })
  }
  setCanvasStatus(boo){
    this.setState(
      {canvasOn: boo});
  }
  toggleCanvas(){
    this.setState({
      canvasOn:!this.state.canvasOn,
    })
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
  handleClick(event, name){
    switch (name) {
      case "Dashboard":
        this.changeActive(name);
        this.setCanvasStatus(false);
        this.props.addHeader(event, "Dashboard", "Dashboard");
        break;
      case "Users":
        this.changeActive(name);
        //TODO: UserManagement 是ID 还是 Users 是？
        this.props.addHeader(event, "UserManagement", "Users");
        this.setCanvasStatus(false);
        break;
      case "UserInfo":
        this.changeActive(name);
        this.props.addHeader(event, "Profile", "UserInfo");
        this.setCanvasStatus(false);
        break;
      default:
        event.preventDefault();
        this.changeActive(name);
        this.clickToDisplayCanvas(name);
    }
  };
  render(){
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
};


const mapDispatchToProps = (dispatch) => ({
  addHeader: (event, headingTitle, headingID) => 
  dispatch(AddHeader(event, headingTitle, headingID))
});

const mapStateToProps = (state) => ({
  role: state.Authentication.role.toLowerCase(),
});

const NavSideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSideBar);
export default NavSideBarContainer;
