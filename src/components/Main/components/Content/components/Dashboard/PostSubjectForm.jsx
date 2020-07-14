import React from "react";
import Loader from "../../../../../Loader";
import FullWidthLayout from "../../../../../Layout/FullWidthLayout";
import styles from "./PostSubjectForm.module.scss";
import postSubject from "../../../../../../apis/postSubject";


class PostSubjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postSuccessful: false,
      loading: false,
      errorMessage: "",
      notNullableError:"",
      name: "",
      subjectCode: "",
      introduction: "",
    };
  }

  handleSubjectCodeChange() {
    this.setState({ errorMessage: "" },this.validateSubjectCode);
  }
  validateSubjectCode() {
    const regex = /[A-Za-z]/;
    const char = this.state.subjectCode.split("").pop();
    console.log(char);
      if (!regex.test(char) && char) {
        this.setState({ errorMessage: `${char} is not a valid character.` });
        return false;
      } else if(char){
        return true;
      }
    }
  checkNull(){
    const {  postSuccessful,loading,errorMessage,notNullableError,...checkProps} = this.state;
    for( let prop in checkProps){
     if(!checkProps[prop].trim()) {
       this.setState({ notNullableError: "Not empty input is allowed." });
      }
   }
  }
  handleValueChange(name) {
    return (event) => {
      const { value } = event.target;
      this.setState(
        {
          [name]: value,
          notNullableError: "",
        },
        this.checkNull);
    };
  }
  async postSubject() {
    const { loading, postSuccessful,errorMessage,notNullableError, ...postBody } = this.state;
    this.setState({
      loading: true,
    });
    await postSubject(postBody)
      .then(() => {
        this.setState(
          {
            loading: false,
            postSuccessful: true,
          },
          () => setTimeout(() => this.setState({ postSuccessful: false }), 2000)
        );
      })
      .catch(console.log);
  }
  onSubmit() {
    this.postSubject();
  }
  render() {
    return (
      <FullWidthLayout>
        <div className={styles.postWrapper}>
          <form
            className={`${styles.form} ${
              this.state.postSuccessful && styles.successful
            }`}
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <div className={styles.title}>Post New Subject</div>
            {this.state.loading ? (
              <div className={styles.loaderContainer}>
                <Loader />
              </div>
            ) : null}
            <div className={styles.control + " " + styles.horizontalRow}>
              <div className={styles.titleInput}>
                <label htmlFor="name">Name: </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter name for the subject"
                  maxLength={30}
                  required
                  onChange={(event) => this.handleValueChange("name")(event)}
                />
              </div>
              <div className={styles.titleInput}>
                <label
                  htmlFor="subjectCode"
                  className={!this.state.errorMessage ? null : styles.error}
                >
                  Subject Code:{" "}
                </label>
                <input
                  id="subjectCode"
                  type="text"
                  minLength={3}
                  maxLength={3}
                  required
                  onChange={(event) => {
                    this.handleValueChange("subjectCode")(event);
                    this.handleSubjectCodeChange();
                  }}
                />
              </div>
            </div>
            <div className={styles.control}>
              <label htmlFor="Intro">Introduction: </label>
              <textarea
                id="Intro"
                className={styles.intro}
                placeholder="Enter introduction for the subject."
                required
                onChange={(event) => {
                  this.handleValueChange("introduction")(event);
                }}
              ></textarea>
            </div>
            {!this.state.errorMessage && !this.state.notNullableError ? (
              <button className={styles.button} type="submit">
                Add New Subject
              </button>
            ) : (
              <div className={styles.inactiveBlock}>Unable to Click</div>
            )}
            {this.state.postSuccessful ? (
              <small className={styles.successfulText}>Successful.</small>
            ) : null}
            {this.state.errorMessage ||this.state.notNullableError ? (
              <small className={styles.errorText}>
                {this.state.errorMessage +" " +this.state.notNullableError}
              </small>
            ) : null}
          </form>
        </div>
      </FullWidthLayout>
    );
  }
}

export default PostSubjectForm;
