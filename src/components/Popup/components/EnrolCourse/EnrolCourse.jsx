import React from "react";
import styles from "./EnrolCourse.module.scss";
import enrolCourse from '../../../../apis/enrolCourse';
import LoaderContainer from '../../../Layout/LoaderContainer';
import Loader from '../../../Loader';
// Post object would need a name

class EnrolCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      successful: false,
    };
  }

  async enrolCourse() {
    const { id, toggle, handleEnrol } = this.props;
    this.setState({ loading: true });
    await enrolCourse(id)
      .then(() =>
        this.setState(
          {
            loading: false,
          },
          ()=> {
            handleEnrol();
            toggle();})
        )
      .catch((err) => {
        console.log(err);
      });
  }
  onSubmit() {
    this.enrolCourse();
  }

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading?<LoaderContainer>
          <Loader />
        </LoaderContainer>:null}
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
export default EnrolCourse;
