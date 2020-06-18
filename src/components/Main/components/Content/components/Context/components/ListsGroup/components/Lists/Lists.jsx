import React from "react";
import styles from "./Lists.module.scss";
import StudentLists from "./components/StudentLists";
import TeacherLists from './components/TeacherLists';
import CourseLists from './components/CourseLists';
import Popup from "./components/Popup"

class Lists extends React.Component{
  constructor(props){
    super(props);
  }
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div>
        <div className={styles.btn} onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        {this.state.seen ? <Popup toggle={this.togglePop} /> : null}
      </div>
    );
  }

  renderComponent(){
      switch (this.props.listType) {
        case "student":
          return (<div>
          <StudentLists onClick={this.props.onClick} />  
          <div>
        <div className={styles.btn} onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        {this.state.seen ? <Popup toggle={this.togglePop} /> : null}
      </div></div>);
        case "teacher":
          return <TeacherLists onClick={this.props.onClick} />;
        case "course":
          return <CourseLists onClick={this.props.onClick} />;
        default:
          return null;
      }
    }
  render(){
    console.log(this.props);
  return (
    <div className={styles.wrapper}>
      {this.renderComponent()}
    </div>)
};
}

export default Lists;
