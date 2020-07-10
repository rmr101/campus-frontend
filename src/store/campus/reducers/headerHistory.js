import { ADD_HEADER } from "../type";
const initState = {
  title: "Dashboard",
  content: { pageID: "Dashboard"},
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_HEADER:
      let contentObj = addContent(action.toPageID, action.id, action.courseID); 
      let newState = addHeader(action.headingTitle,contentObj);
       console.log(newState);
      return newState;
    default:
      return state;
  }
};

  
const addHeader = (headerTitle, contentObj) => {
  return {
    title: headerTitle,
    content: contentObj,
  };
};

const addContent = (toPageID, id , courseID) => {
  // mapping for content to be display
  switch (toPageID) {
    case "Dashboard":
      return { pageID: "Dashboard" };
    case "Assignment":
      return { pageID: "Assignment", id, courseID };
    case "Enrollment":
      return { pageID: "Enrollment" };
    case "UserInfo":
      return { pageID: "UserInfo" };
    case "Users":
      return { pageID: "Users" };
    case "Help":
      return { pageID: "Help" };
    case "Setting":
      return { pageID: "Setting" };
    case "SubjectCourse":
      return { pageID: "SubjectCourse", id, };
    case "TeacherCourseAssignment":
      return { pageID: "TeacherCourseAssignment", id, };
    //TODO: case "TeacherAssignment":
    case "StudentAssignment":
      return { pageID: "StudentAssignment"};
    case "Course":
      return { pageID: "Course" };
    default:
      return { pageID: "Dashboard" };
  }
};
