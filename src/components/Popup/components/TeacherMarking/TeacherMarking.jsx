import React from "react";
import styles from "./TeacherMarking.module.scss";
import putReviewOnAssignment from '../../../../apis/putReviewOnAssignment';
import  Loader from '../../../Loader';
// Post object would need a name

class TeacherMarking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      comment: "",
      score: 0,
      successful: false,
    };
  }

  onSubmit() {
    const { id } = this.props;
    this.putReview(id);
  }
  async putReview(id){
    const {score,comment} = this.state
    this.setState({loading:true});
    await putReviewOnAssignment(id, score, comment)
      .then(() =>
        this.setState(
          {
            successful: true,
            loading: false,
          },
          () => {
            setTimeout(() => this.setState({ successful: false }), 3000);
          }
        )
      )
      .catch(console.log);
  }
  handleValueChange(name) {
    this.setState({
      successful: false,
    });
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
        });
    };
  }
  renderFormClassName() {
    let successful = this.state.successful ? " " + styles.successful : "";
    return (styles.form + successful).trim();
  }

  render() {
    return (
      <form
        className={this.renderFormClassName()}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        ) : null}
        <div className={styles.control}>
          <label>Enter Score:</label>
          <input
            className={styles.oldPass}
            type="number"
            placeholder="Enter score"
            required
            max={100}
            min={0}
            onChange={(event) => this.handleValueChange("score")(event)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            className={styles.comment}
            placeholder="Enter comment for this assignment"
            required
            onChange={(event) => {
              this.handleValueChange("comment")(event);
            }}
          ></textarea>
        </div>

        {this.state.successful ? (
          <small className={styles.successfulText}> Successful. </small>
        ) : null}
        <button className={styles.button} type="submit">
          Confirm
        </button>
      </form>
    );
  }
}
export default TeacherMarking;
