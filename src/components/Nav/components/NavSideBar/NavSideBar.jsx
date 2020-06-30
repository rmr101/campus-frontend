import React from "react";
import styles from "./NavSideBar.module.scss";
import NavItems from "./components/NavItems";
import * as NavItemsRenderMapper from './NavItemsRenderMapper';
import Canvas from './components/Canvas';




class NavSideBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.state= {
      canvasOn:false,
      current:"Dashboard",
    }
  }
  readConfig(ConfigArray){
    return ConfigArray.map((obj) => {
      if (obj.filler) {
          return <div key={"Filler"} className={styles.filler}></div>
      } else { 
        return(
          <NavItems
            active={this.state.current === obj.id}
            collapse={this.state.canvasOn}
            key={"NavItem_id" + Math.random()}
            icon={obj.icon}
            title={obj.title}
            id={obj.id}
            onClick={this.handleClick}
          />)
      }
    });
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
  changeCurrent(name){
    this.setState({
      current:name,
    })
  }
  clickToDisplayCanvas(name){
    if (name === this.state.current) {
      this.setState({
        canvasOn: !this.state.canvasOn,
      });
    }else if(name !== this.state.current){
      //这个method 好像不太好，因为吃performance，之后要想想怎么处理这个问题
      this.setState({
        canvasOn: false,

      },()=>this.setState({
          canvasOn: true,

        }))
    }
  }
  handleClick(event,name){
    console.log(name + " name");
    switch (name) {
      case "Dashboard":
        this.changeCurrent(name);
        this.props.handleClickDashboard(event);
        this.setState({ canvasOn: false });
        break;
      case "Teachers":
        this.changeCurrent(name);
        //id here doesn't matter 
        this.props.onClick(event, "Teachers", 0, name);
        this.setState({ canvasOn: false });
        break;
      case "Students":
        this.changeCurrent(name);
        //id here doesn't matter 
        this.props.onClick(event, "Students", 0, name);
        this.setState({ canvasOn: false });
        break;
      case "UserInfo":
        this.changeCurrent(name);
        //id here doesn't matter 
        this.props.onClick(event, "Profile", 0, name);
        this.setState({ canvasOn: false });
        break;
      default:
        event.preventDefault();
        this.clickToDisplayCanvas(name);
        this.changeCurrent(name);
    }
  }

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
          {this.state.canvasOn ? (
            <Canvas
              onClick={this.props.onClick}
              current={this.state.current}
              role={this.props.role}
            />
          ) : null}
        </div>
   
      </div>
    );
  }
}

export default NavSideBar;
