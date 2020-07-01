// this is a config for nav bar
// eg: Assignments
// --> Assignments 1001
// --> Assignments 1002
// --> Assignments 1003


//currently mimicking the database, contents are stored here. later this will needed to be deleted

export const DashboardContent = 
         [
           { type: "StudentAssignment", range: "Half", title: "Upload" },
           { type: "Context", range: "Half", title: "Information" },
           { type: "Popup", range: "Half", title: "Change Name" },
         ];

export const AssignmentsContent = [];

export const EnrollmentsContent = [];


export const HelpContent = 
  [
    {
      type: "Context",
      range: "Half",
      title: "Comment (max 1,500 characters)",
      context: "This is Comment.",
    },
    {
     type: "Context",
     range: "Half",
     title: "Surname",
     context: "Doe",
    },
    {
     type: "Context",
     range: "Half",
     title: "Given Name",
     context: "John",
    },
    {
     type: "Context",
     range: "Half",
     title: "Postcode",
     context: "3121",
    },
    {
     type: "Context",
     range: "Half",
     title: "Email",
     context: "john.doe@abc.edu",
    },
    {
     type: "Context",
     range: "Half",
     title: "Phone",
     context: "012345678",
    },
  ];

export const ConfigurationContent = [
{
type: "Context",
range: "Half",
title: "Font Size",
context: "13",
},
{
type: "Context",
range: "Half",
title: "font-family",
context: "Arial",
}
];
export const TeachersContent = [];
export const StudentsContent = [];
export const ClassroomContent = [
{
type: "Context",
range: "Half",
title: "Location",
context: "Queen St, Melbourne VIC 3000",
},
{
type: "Context",
range: "Half",
title: "Class members (teachers and students)",
context: "100",
},
{
type: "Context",
range: "Half",
title: "other",
context: "other 101",
},];
export const CourseContent = [
         [
           {
             type: "Context",
             range: "Full",
           },
         ],
       ];

export const TeachingCourseContent = [];
export const MarkSystemContent = [];
export const SubjectCourseContent = 
         [
           {
             type: "SubjectCourse",
             range: "Full",
           },
         ];

export const UserInfoContent = [
  {
    type: "Profile",
    range: "Half",
    title: "get info",
    context: "teacher title",
  },
  {
    type: "Context",
    range: "Half",
    title: "Surname",
    context: "Doe",
  },
  {
    type: "Context",
    range: "Half",
    title: "Given Name",
    context: "John",
  },
  {
    type: "Context",
    range: "Half",
    title: "Address",
    context: "Queen St, Melbourne VIC 3000",
  },
  {
    type: "UserChangePassword",
    range: "Half",
    title: "Change Password",
    context: "012345678",
  },
  {
    type: "Context",
    range: "Half",
    title: "Postcode",
    context: "3121",
  },
  {
    type: "Context",
    range: "Half",
    title: "Email",
    context: "john.doe@abc.edu",
  },
  {
    type: "Context",
    range: "Half",
    title: "Phone",
    context: "012345678",
  },
];


export const NoContent = [
{
type: "Context",
range: "Half",
description:"No Content is displaying here",
title: "Sorry",
}
];