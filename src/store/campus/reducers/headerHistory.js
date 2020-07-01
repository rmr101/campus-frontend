import { ADD_HEADER_HISTORY,CLICK_HEADER } from "../../type";
import * as ContentArray from "./../../../utils/ContentMapper/ContentMapper";
const initState = 
[{
    headingID: 1,
    title: "Dashboard",
    content: ContentArray.DashboardContent,
  }]

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_HEADER_HISTORY:
      let contentArray = handleClickLink(
        action.clickedLinkName,
        action.id
      ); 
      handleAddHeader(state, action.event, action.headingTitle, contentArray);
      return 
    case CLICK_HEADER:
      return handleClickHeader(state,action.event,action.headingID);
    default:
      return state;
  }
};


const handleClickHeader = (state,event,headingID) =>{
    event.preventDefault();
    return state.slice(0,headingID)
  }



  
const handleAddHeader = (state, event, headingTitle, contentArray) => {
  event.preventDefault();
  let history = state;
  if (headingTitle !== history[history.length - 1].title) {
    let id = history.length + 1;
    let newHistory = [
      ...history,
      {
        headingID: id,
        title: headingTitle,
        content: contentArray,
      },
    ];
    return newHistory;
  }
};

const handleClickLink = (clickedLinkName,id) => {
  let contentArray;
  // mapping for content to be display
  switch (clickedLinkName) {
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
      //TODO: Frank 改这里。
      contentArray = ContentArray.UserInfoContent;
      break;
    case "Teachers":
      contentArray = ContentArray.TeachersContent;
      break;
    case "Help":
      contentArray = ContentArray.HelpContent;
      break;
    case "Setting":
      contentArray = ContentArray.ConfigurationContent;
      break;
    case "SubjectCourse":
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
      contentArray = ContentArray.CourseContent[0];
      break;
    default:
      contentArray = ContentArray.NoContent[0];
  }
  return contentArray;
};
