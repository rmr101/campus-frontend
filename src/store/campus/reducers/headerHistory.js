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
     
      let contentArray = handleClickLink(action.LinkNameID, action.id); 
      let newHistory = handleAddHeader(state, action.event, action.headingTitle, contentArray);
       console.log(newHistory);
      return newHistory;
    case CLICK_HEADER:
      return handleClickHeader(state,action.event,action.headingID);
    default:
      return state;
  }
};


const handleClickHeader = (state,event,headingID) =>{
    event.preventDefault();
    return state.slice(0,headingID);
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
  }else{
    return history;
  }
};

const handleClickLink = (LinkNameID,id) => {
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
