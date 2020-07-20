import React from "react";

import enrolCourse from '../../../../apis/enrolCourse';
import LoaderContainer from '../../../Layout/LoaderContainer';
import Loader from '../../../Loader';
import {FormLayout,Button,SmallText} from '../../../Layout/FormLayout/FormLayout';
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
      <FormLayout
        onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit();
        }}
      >
        {this.state.loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : null}
        {this.state.successful ? <SmallText> Successful. </SmallText> : null}
        <Button type="submit">Confirm</Button>
      </FormLayout>
    );
  }
}
export default EnrolCourse;
