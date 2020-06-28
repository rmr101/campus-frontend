// this is a config for nav bar
// eg: Assignments
// --> Assignments 1001
// --> Assignments 1002
// --> Assignments 1003


//currently mimicking the database, contents are stored here. later this will needed to be deleted

export const DashboardContent = [
  [
    { type: "Context", range: "Half", title: "Information" },
    { type: "Popup", range: "Half", title: "Change Name" },
    {
      type: "Lists",
      range: "Half",
      title: "List 1",
      linkIDArray: [0, 1],
    },
    {
      type: "Lists",
      range: "Half",
      title: "List 2",
      linkIDArray: [0],
    },
  ],
];

export const AssignmentsContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Assignment 1001",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
[
{
type: "Context",
range: "Half",
title: "Information about Assignment 1002",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
[
{
type: "Context",
range: "Half",
title: "Information about Assignment 1003",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];

export const EnrollmentsContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Enrolled Course 1001",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
[
{
type: "Context",
range: "Half",
title: "Information about Enrolled Course 1002",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
[
{
type: "Context",
range: "Half",
title: "Information about Enrolled Course 1003",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const UserInfoContent = [
[
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
],
[
{
type: "Context",
range: "Half",
title: "Information about other User information",
context: "One Two Three",
},
{ type: "Popup", range: "Half", title: "Detail" },
]
];

export const HelpContent = [
  [
    {
      type: "Context",
      range: "Half",
      title: "When can I change my enrolment in RMR 101 SChool?",
      description:"This is a description",
      context:
        "You can make changes: \n during the enrolment period for the first and second semester \n during the re-enrolment period which starts on the second Monday of October each year \n  after the release of official unit results to check your unit choices are still valid.",
    },
    {
      type: "Context",
      range: "Half",
      title: "How can I get around campus safely at night?",
      context: "I don't know.",
    },
    {
      type: "Context",
      range: "Half",
      title: "Title",
      context: "Context",
    },
  ],
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
  ],
];
export const ConfigurationContent = [
[
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
},
]
];
export const TeachersContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const StudentsContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const ClassroomContent = [
[
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
},

],
];
export const CoursesContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const TeachingCourseContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const MarkSystemContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];
export const DisplayFullContent = [
  [
    {
      type: "Context",
      range: "Full",
    },
  ],
];


export const NoContent = [
[
{
type: "Context",
range: "Half",
title: "Information about Configuration",
},
{ type: "Popup", range: "Half", title: "Detail" },
],
];