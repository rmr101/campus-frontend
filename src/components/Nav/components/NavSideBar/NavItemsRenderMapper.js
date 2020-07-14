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
         Users: faChalkboardTeacher,
         MarkSystem:faClipboardCheck,
         TeachingCourse:faChalkboard,
         Courses:faLightbulb,
         Classroom:faDesktop,
       };

// ID here is important for the secondary list in <Canvas/> component. 
// config for each role
export const StudentConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", NavId: "Dashboard" },
         {
           icon: renderList.Enrollment,
           title: "My Course",
           NavId: "Enrollment",
         },
         {
           icon: renderList.Assignment,
           title: "Assignment",
           NavId: "Assignment",
         },
         {
           icon: renderList.Payment,
           title: "Payment",
           NavId: "Payment",
         },
         {
           icon: renderList.CourseMarket,
           title: "Course market",
           NavId:"CourseMarket"
         },
         {
           icon: renderList.UserInfo,
           title: "Profile",
           NavId:"UserInfo",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           NavId:"Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           NavId:"Setting",
         },
       ];

export const TeacherConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", NavId: "Dashboard" },
         {
           icon: renderList.TeachingCourse,
           title: "Teaching",
           NavId: "TeachingCourse",
         },
         {
           icon: renderList.MarkSystem,
           title: "Marking",
           NavId: "MarkSystem",
         },
         {
           icon: renderList.CourseMarket,
           title: "Course market",
           NavId: "CourseMarket",
         },
         {
           icon: renderList.UserInfo,
           title: "Profile",
           NavId: "UserInfo",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           NavId: "Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           NavId: "Setting",
         },
       ];
export const AdminConfig = [
         { icon: renderList.Dashboard, title: "Dashboard", NavId: "Dashboard" },
         {
           icon: renderList.Users,
           title: "User management",
           NavId: "Users",
         },
         {
           icon: renderList.Courses,
           title: "Course management",
           NavId: "CourseManagement",
         },

         {
           icon: renderList.Classroom,
           title: "Classroom",
           NavId: "Classroom",
         },
         {
           filler: true,
         },
         {
           icon: renderList.Help,
           title: "Help",
           NavId: "Help",
         },
         {
           icon: renderList.Setting,
           title: "Setting",
           NavId: "Setting",
         },
       ];