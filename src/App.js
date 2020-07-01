import React from 'react';
import styles from './App.module.scss';
import Nav from './components/Nav';
import Main from "./components/Main";
import Login from './components/Login';
import * as ContentArray from "./components/RenderMapper/ContentMapper";
import { UserInfoContent } from "./components/RenderMapper/UserInfoContent/UserInfoContentMaper";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

//Dashboard content ID 0,
//role: student 
//目前是以一个render content ID 来实现

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: this.props.userRole,
      current: "Dashboard",
      history: [
        {
          headingID: 1,
          title: "Dashboard",
          content: ContentArray.DashboardContent[0],
        },
      ],
    };
   
    this.handleClickLink = this.handleClickLink.bind(this);
    this.handleClickHeader = this.handleClickHeader.bind(this);
    this.handleAddHeader = this.handleAddHeader.bind(this); 
    
  }

  handleClickHeader(event,headingID) {
    event.preventDefault();
    const history = this.state.history;
    this.setState(
      { history: history.slice(0,headingID)}
    );
  }

  handleAddHeader(event,name,contentArray) {
    
    event.preventDefault();

    let history = this.state.history;
    if (name !== history[history.length-1].title) {
      let id = history.length + 1;
      let newHistory = [
        ...history,
        {
          headingID: id,
          title: name,
          content: contentArray,
        },
      ];

      this.setState({ history: newHistory });
    }
  }
  handleClickLink(e, HeaderTitle, id, currentNavItem) {
    let contentArray;
    // mapping for content to be display
    switch (currentNavItem) {
      case "Dashboard":
        contentArray = ContentArray.DashboardContent[0];
        break;
      case "Assignment":
        contentArray = ContentArray.AssignmentsContent[id];
        break;
      case "Enrollment":
        contentArray = ContentArray.EnrollmentsContent[id];
        break;
      case "UserInfo":
        //TODO: Frank 改这里。
        contentArray = UserInfoContent;
        break;
      case "Teachers":
        contentArray = ContentArray.TeachersContent[id];
        break;
      case "Help":
        contentArray = ContentArray.HelpContent[id];
        break;
      case "Setting":
        contentArray = ContentArray.ConfigurationContent[id];
        break;
      case "SubjectCourse":
        console.log("I got executed");
        contentArray = ContentArray.SubjectCourseContent[0];
        //append ID to the subject
        contentArray = [
          {
            ...contentArray[0],
            subjectID: id,
          },
        ];
        console.log(contentArray);
        break;
        //TODO: To added a course display page after clicked
      case "Course":
        contentArray = ContentArray.CourseContent[0];
        break;
      default:
        contentArray = ContentArray.NoContent[0];
    }
    this.setState({
      current: currentNavItem,
    },() => this.handleAddHeader(e,HeaderTitle,contentArray));
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Router>
          {!this.props.loginState ? (
            <Route path="/login">
              <Login />
            </Route>
          ) : (
            <Redirect to="/" />
          )}
          {this.props.loginState ? (
            <Route path="/" exact>
              <div className={styles.nav}>
                <Nav
                  role={this.props.userRole}
                  onClick={this.handleClickLink}
                  handleClickDashboard={(e) => this.handleClickHeader(e, 1)}
                />
              </div>
              <div className={styles.main}>
                <Main
                  history={this.state.history}
                  title={this.state.title}
                  role={this.props.userRole}
                  current={this.state.current}
                  handleClickHeader={this.handleClickHeader}
                  onClick={this.handleClickLink}
                />
              </div>
            </Route>
          ) : (
            <Redirect to="/login" />
          )}
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) =>({
  userRole: state.userRole,
  loginState: state.loginState,
})

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
