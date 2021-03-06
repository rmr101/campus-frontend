import { ADD_HEADER } from "../type";
const initState = {
  title: "Dashboard",
  content: { pageID: "Dashboard" },
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_HEADER:
      let contentObj = addContent(action.toPageID, action.id, action.courseID);
      let newState = addHeader(action.headingTitle, contentObj);
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

const addContent = (toPageID, id, secondID) => {
  // mapping for content to be display
  switch (toPageID) {
    case "Dashboard":
      return { pageID: "Dashboard" };
    case "MarkingAssignment":
      return { pageID: "MarkingAssignment", id, secondID };
    case "Assignment":
      return { pageID: "Assignment", id, secondID };
    case "Enrollment":
      return { pageID: "Enrollment" };
    case "UserInfo":
      return { pageID: "UserInfo", id, secondID };
    case "Users":
      return { pageID: "Users" };
    case "CourseManagement":
      return { pageID: "CourseManagement" };
    case "Help":
      return { pageID: "Help" };
    case "Setting":
      return { pageID: "Setting" };
    case "SubjectCourse":
      return { pageID: "SubjectCourse", id };
    case "TeacherCourseAssignment":
      return { pageID: "TeacherCourseAssignment", id };
    case "TeacherMarkingSystem":
      return { pageID: "TeacherMarkingSystem", id };
    case "StudentAssignment":
      return { pageID: "StudentAssignment" };
    case "Payment":
      return { pageID: "Payment" };
    case "Classroom":
      return { pageID: "Classroom" };
    case "CourseDetail":
      return { pageID: "CourseDetail", id };
    case "StudentCourse":
      return { pageID: "StudentCourse", id };
    default:
      return { pageID: "TO_BE_IMPLEMENT" };
  }
};
