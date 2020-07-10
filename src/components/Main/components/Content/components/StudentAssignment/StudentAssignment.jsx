import React from "react";
import styles from "./StudentAssignment.module.scss";
import getStudentAssignmentList from "../../../../../../apis/getStudentAssignmentList";
import Loader from "../../../../../Loader";
import { connect } from "react-redux";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import NoContent from "../NoContent/NoContent";
import RenderContentLink from "../RenderContentLink";

class StudentAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderArray: null,
      assignmentList: null,
      loading: true,
    };
  }

  async getAssignmentList() {
    this.setState({
      loading: true,
    });
    const { assignmentList } = await getStudentAssignmentList();

    this.setState({
      renderArray: assignmentList,
      assignmentList: assignmentList,
      loading: false,
    });
  }

  componentDidMount() {
    this.getAssignmentList();
  }
  renderOption(option) {
    switch (option) {
      case "all":
        this.setState({ renderArray: this.state.assignmentList });
        break;
      case "notSubmitted":
        this.setState({
          renderArray: this.state.assignmentList.filter(
            (obj) => !obj.submitted
          ),
        });
        break;
      case "scored":
        this.setState({
          renderArray: this.state.assignmentList.filter((obj) => obj.scored),
        });
        break;
      default:
         this.setState({ renderArray: this.state.assignmentList });
    }
  }
  renderResult(array) {
    if (array.length === 0) {
      return <NoContent text={"You have no assignment to be done."} />;
    } else {
      let renderArray = [
        <div
          className={styles.container}
          key={"StudentAssignment " + Math.random()}
        >
          <div className={styles.heading}>Assignment Name:</div>
          <div className={styles.heading}>Assignment ID:</div>
          <div className={styles.heading}>Assignment Due:</div>
          <div className={styles.heading}>Submitted status:</div>
          <div className={styles.heading}>Result status:</div>
        </div>,
        this.renderAssignmentList(this.state.renderArray),
      ];
      return renderArray;
    }
  }
  renderAssignmentList(array) {
    //a_ for sorting purpose
    return array.map((obj) => {
      let { id, score, submitted, scored } = obj;
      let { title, dueDate } = obj.assignment;
      let RenderObj = {
        name: title,
        id: id,
        a_dueDate: dueDate + " 11:59 pm ",
        b_submitted: submitted ? "Done" : "No Submitted",
        c_scored: scored ? score : "Not Marked yet",
      };

      return (
        <RenderContentLink
          key={"StudentAssignment " + Math.random()}
          RenderObj={RenderObj}
          toPageID={"Assignment"}
        />
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <FullWidthLayout>
          <div className={styles.wrapper}>
            {this.state.loading ? (
              <div className={styles.LoadingWrapper}>
                <Loader />
              </div>
            ) : (
              <div className={styles.contentWrapper}>
                <div className={styles.radioWrapper}>
                  <div className={styles.title}> Display Option: </div>
                  <div className={styles.radio}>
                    <input
                      id="all"
                      type="radio"
                      name="display"
                      onChange={() => this.renderOption("all")}
                    />
                    <label className={styles.radioLabel} htmlFor="all">
                      Display All
                    </label>
                  </div>
                  <div className={styles.radio}>
                  <input
                    id="notSubmitted"
                    type="radio"
                    name="display"
                    onChange={() => this.renderOption("notSubmitted")}
                  />
                  <label htmlFor="notSubmitted" className={styles.radioLabel}>
                    Display only not submitted
                  </label>
                  </div>
                  <div className={styles.radio}>
                  <input
                    id="scored"
                    type="radio"
                    name="display"
                    onChange={() => this.renderOption("scored")}
                  />
                  <label htmlFor="scored" className={styles.radioLabel}>
                    Display only marked
                  </label>
                  </div>
                </div>
                {this.renderResult(this.state.renderArray)}
              </div>
            )}
          </div>
        </FullWidthLayout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.headerHistory.content.id,
  header: state.headerHistory.title,
});
const StudentAssignmentContainer = connect(mapStateToProps)(StudentAssignment);
export default StudentAssignmentContainer;
