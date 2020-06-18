//import
import {
  faShoppingCart,
  faCreditCard,
  faBook,
  faUser,
  faThList,
  faQuestionCircle,
  faCog,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";

//icon list
export const renderList = {
  Dashboard:  faColumns,
  Enrollment: faBook,
  Assignment: faThList,
  Payment: faCreditCard,
  CourseMarket: faShoppingCart,
  UserInfo: faUser,
  Help: faQuestionCircle,
  Setting: faCog,
};


// config for each role
export const studentConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", id: "Dashboard" },
         {
           icon: renderList.Enrollment,
           title: "Enrollment",
           id: "Enrollment",
         },
         {
           icon: renderList.Assignment,
           title: "Assignment",
           id: "Assignment",
         },
         {
           icon: renderList.Payment,
           title: "Payment",
           id: "Payment",
         },
         {
           icon: renderList.CourseMarket,
           title: "Course market",
           id:"CourseMarket"
         },
         {
           icon: renderList.UserInfo,
           title: "User information",
           id:"UserInfo",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           id:"Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           id:"Setting",
         },
       ];

// export const TeacherConfig = [];
// export const AdminConfig = [];