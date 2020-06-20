import React from "react";
import styles from "./Lists.module.scss";
import StudentLists from "./components/StudentLists";
import TeacherLists from './components/TeacherLists';
import CourseLists from './components/CourseLists';

class Lists extends React.Component{
  constructor(props){
    super(props);
  }

  renderComponent(){
    console.log(this.props);
      switch (this.props.listType) {
        case "student":
          return (
          <StudentLists onClick={this.props.onClick} />  
          );
        case "teacher":
          return <TeacherLists onClick={this.props.onClick} />;
        case "course":
          return <CourseLists onClick={this.props.onClick} />;
        default:
          return null;
      }
    }
  render(){
  return (
    <div className={styles.wrapper}>
      {this.renderComponent()}
    </div>)
};
}

export default Lists;
