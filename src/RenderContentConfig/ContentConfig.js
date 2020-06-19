// this is a config for nav bar
// eg: Assignments
// --> Assignments 1001
// --> Assignments 1002
// --> Assignments 1003

export const DashboardContent = [
  [
    { type: "Context", range: "Half", title: "Information" },
    { type: "Popup", range: "Half", title: "Change Name" },
    {
      type: "Lists",
      range: "Half",
      title: "Student",
      listType: "student",
    },
    {
      type: "ListsGroup",
      range: "Half",
      title: "Student",
      listType: "student",
    },
    {
      type: "ListsGroup",
      range: "Half",
      title: "Teacher",
      listType: "teacher",
    },
    {
      type: "ListsGroup",
      range: "Half",
      title: "Course",
      listType: "course",
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
      title: "Information about User information",
    },
    { type: "Popup", range: "Half", title: "Detail" },
  ],
  [
    {
      type: "Context",
      range: "Half",
      title: "Information about User information",
    },
    { type: "Popup", range: "Half", title: "Detail" },
  ]
];

export const HelpContent = [
  [
    {
      type: "Popup",
      range: "Help",
      title: "When can I change my enrolment in RMR 101 SChool?",
      context: "You can make changes: \n during the enrolment period for the first and second semester \n during the re-enrolment period which starts on the second Monday of October each year \n  after the release of official unit results to check your unit choices are still valid.", 
    },
    { 
      type: "Popup",
      range: "Help", 
      title: "How can I get around campus safely at night?", 
      context: "I don't know." 
    },
    { 
      type: "Context",
      range: "Help", 
      title: "Title", 
      context: "Context" 
    },
  ],
  [
    {
      type: "Context",
      range: "Half",
      title: "Information about  Enrolled Course",
    },
    { type: "Popup", range: "Half", title: "Detail" },
  ],
];
export const ConfigurationContent = [
  [
    {
      type: "Context",
      range: "Half",
      title: "Information about Configuration",
    },
    { type: "Popup", range: "Half", title: "Detail" },
  ]
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