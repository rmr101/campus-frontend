import { ADD_HEADER } from "../type";
import * as ContentArray from "./../../../utils/ContentMapper/ContentMapper";
const initState = 
  {
    title: "Dashboard",
    content: ContentArray.DashboardContent,
  };

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_HEADER:
      let contentArray = addContent(action.contentType, action.id); 
      let newState = addHeader(action.event,action.headingTitle,contentArray);
       console.log(newState);
      return newState;
    default:
      return state;
  }
};

  
const addHeader = (event, headerTitle, contentArray) => {
  event.preventDefault();
  return {
    title: headerTitle,
    content: contentArray,
  };
};

const addContent = (LinkNameID, id) => {
  let contentArray;
  // mapping for content to be display
  switch (LinkNameID) {
    case "Dashboard":
      contentArray = ContentArray.DashboardContent;
      break;
    case "Assignment":
      contentArray = ContentArray.AssignmentsContent;
      break;
    case "Enrollment":
      contentArray = ContentArray.EnrollmentsContent;
      break;
    case "UserInfo":
      contentArray = ContentArray.UserInfoContent;
      console.log(contentArray);
      break;
    case "Users":
      contentArray = ContentArray.UsersContent;
      break;
    case "Help":
      contentArray = ContentArray.HelpContent;
      break;
    case "Setting":
      contentArray = ContentArray.ConfigurationContent;
      break;
    case "SubjectCourse":
      console.log("SubjectCourse");
      contentArray = ContentArray.SubjectCourseContent;
      //append ID to the subject
      contentArray = [
        {
          ...contentArray[0],
          subjectID: id,
        },
      ];
      break;

    //TODO: To added a course display page after clicked
    case "Course":
      contentArray = ContentArray.CourseContent;
      break;
    default:
      contentArray = ContentArray.NoContent;
  }
  return contentArray;
};
