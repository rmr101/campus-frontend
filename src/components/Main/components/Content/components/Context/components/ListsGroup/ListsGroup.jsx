import React from "react";
import styles from "./ListsGroup.module.scss";
import StudentGroup from './components/StudentGroup';
import Lists from './components/Lists';
import TeacherGroup from "./components/TeacherGroup";
import CourseGroup from "./components/CourseGroup";


class ListsGroup extends React.Component{
  constructor(props){
    super(props);
  }
  renderComponent(){
    if (this.props.type == "ListsGroup") {
      switch (this.props.listType) {
        
        case "student":
          return <StudentGroup {...this.props}/>;
        case "teacher":
          return <TeacherGroup {...this.props} />;
        case "course":
          return <CourseGroup {...this.props} />;
      }} else if (this.props.type == "Lists") {
        console.log(this.props);
        return <Lists {...this.props} />;
      }
    }
  render(){
    console.log(this.props);
  return (
    <div className={styles.wrapper}>
      {this.renderComponent()}
    </div>
  );
}
}

export default ListsGroup;
