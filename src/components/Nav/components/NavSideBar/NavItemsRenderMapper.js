// import icon from library
import {
  faShoppingCart,
  faCreditCard,
  faBook,
  faUser,
  faThList,
  faQuestionCircle,
  faCog,
  faColumns,
  faUsers,
  faChalkboardTeacher,
  faClipboardCheck,
  faChalkboard,
  faLightbulb,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

//icon list corresponding to each navItem.
export const renderList = {
         Dashboard: faColumns,
         Enrollment: faBook,
         Assignment: faThList,
         Payment: faCreditCard,
         CourseMarket: faShoppingCart,
         UserInfo: faUser,
         Help: faQuestionCircle,
         Setting: faCog,
         Students: faUsers,
         Teachers: faChalkboardTeacher,
         MarkSystem:faClipboardCheck,
         TeachingCourse:faChalkboard,
         Courses:faLightbulb,
         Classroom:faDesktop,
       };

// ID here is important for the secondary list in <Canvas/> component. 
// config for each role
export const StudentConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", id: "Dashboard" },
         {
           icon: renderList.Enrollment,
           title: "My Course",
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
           title: "Profile",
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

export const TeacherConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", id: "Dashboard" },
         {
           icon: renderList.TeachingCourse,
           title: "Teaching",
           id: "TeachingCourse",
         },
         {
           icon: renderList.MarkSystem,
           title: "Marking",
           id: "MarkSystem",
         },
         {
           icon: renderList.CourseMarket,
           title: "Course market",
           id: "CourseMarket",
         },
         {
           icon: renderList.UserInfo,
           title: "Profile",
           id: "UserInfo",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           id: "Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           id: "Setting",
         },
       ];
export const AdminConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", id: "Dashboard" },
         {
           icon: renderList.Teachers,
           title: "Teachers",
           id: "Teachers",
         },
         {
           icon: renderList.Students,
           title: "Students",
           id: "Students",
         },
         {
           icon: renderList.Courses,
           title: "Courses",
           id: "Courses",
         },

         {
           icon: renderList.Classroom,
           title: "Classroom",
           id: "Classroom",
         },
         {
           icon: renderList.UserInfo,
           title: "Profile",
           id: "UserInfo",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           id: "Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           id: "Setting",
         },
       ];