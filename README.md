## JR Academy Projects 3 - Campus system 1.0 

This is project three from JR Academy. We are team RMR101.
Backend of this project can be found [here](https://github.com/rmr101/campus-backend).

## About this Campus system.

**Objective:** Deliver a Learning management system which includes:
- Adding teacher, students, courses as admin.
- Enrolling in various courses as student.
- Submitting and reviewing assignments as student.
- Marking and creating assignment as teacher

#### UI Deisgn 

Energetic Login page

![find](readme_img/login.png)


Avatar selection

![find](readme_img/avatar-selection.png)

Course details

![find](readme_img/course-detail.png)

Different role panel

![find](readme_img/role-panel.png)

#### Supported features

Student submission upload, files stored in AWS S3.

- Support file type: .pdf
- File size limit : Less than 25 MB.

![find](readme_img/upload.png)

Add/Update/Delete Students/Teachers/Assignments/Courses/

![find](readme_img/update-popup.png)


#### Site Structure

- Student Profile:
	- Avatar
	- Name
	- Email
	- School
	- Mobile
	- City
	- Address
	- Enrollments
	- Assignments
  
- Course Profile:
	- Name
	- Course Code
	- Number of students
	- Prerequisite knowledge
	- Course length
	- City
	- Course objective
	- Level
	- CommenceDate
	- Start applied date
	- Complete date
	- Tuition
	- Teachers
	- Assignment
  
- Teacher Profile:
	- Name
	- Title
	- Avatar
	- Introduction
	- Course
	- Assignment
  
- Assignment Details
	- Name
	- Title
	- Content
	- Acceptance Criteria

#### Features

Only authenticated admin could manage all users, products, service .etc.

Teacher
- Manage assignment
- View students’ assignment

Student
- Enroll courses
- select avatar
- Payment
- View Class

Admin
- Register student/teacher
- CRUD course
- assign course